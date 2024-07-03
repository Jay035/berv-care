"use client";

import React, {
  useMemo,
  useRef,
  useState,
} from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  LoadScript,
  useLoadScript,
  Circle,
  MarkerClusterer,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";
import { useQuery } from "react-query";
import Image from "next/image";

// COMPONENTS
import useGeoLocation from "@/hooks/useGeoLocationHook";
import { fetchNearbyPlaces } from "@/lib/getAllHospitals";
import { fetchWeather } from "../../api/api";
import mapStyles from "./mapStyles";
import Places from "./Places";
import { useGlobalProvider } from "@/context/GlobalProvider";
import Distance from "./Distance";
import NearbyHospitals from "@/components/NearbyHospitals";
import ExportDataButton from "@/components/ExportDataButton";
import { convertDataToCSV } from "@/utils/csvUtils";
import { UploadCSVToFirebaseStorage } from "@/utils/firebaseUtils";
import PostLoader from "@/components/PostLoader";
import DownloadModal from "@/components/DownloadModal";

export function Map() {
  const mapRef = useRef<google.maps.Map | null>();
  const [destinationHospital, setDestinationHospital] =
    useState<LatLngLiteral>();
  const [nearbyHospitalLocation, setNearbyHospitalLocation] =
    useState<LatLngLiteral>();
  const {
    userLocation: { lat, lng },
  } = useGeoLocation();
  const {
    toggleModal,
    setModalHeader,
    selectedHospitalInfo,
    setSelectedHospitalInfo,
    directions,
    setDirections,
    downloadCSVLink,
    setDownloadCSVLink,
  } = useGlobalProvider();

  const mapContainerStyle = {
    width: "100%",
    height: "90vh",
  };

  // MAP OPTIONS
  const options = useMemo<MapOptions>(
    () => ({
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
      clickableIcons: false,
    }),
    []
  );

  // MAP CENTER POSITION
  const center = useMemo<LatLngLiteral>(
    () => ({
      lat: lat,
      lng: lng,
    }),
    [lat, lng]
  );

  const { isLoaded, loadError } = useLoadScript({
    // id: "google-map-script",
    googleMapsApiKey: process?.env.NEXT_PUBLIC_Google_Places_API!,
    libraries: ["places"],
  });

  const [clickedPos, setClickedPos] = useState<LatLngLiteral>(
    {} as google.maps.LatLngLiteral
  );

  const [selectedMarker, setSelectedMarker] = useState<MarkerType>(
    {} as MarkerType
  );

  // fetch nearby hospitals info
  const {
    data: nearbyHospitalsData,
    isLoading,
    isError,
  } = useQuery([lat, lng], () => fetchNearbyPlaces(lat, lng), {
    enabled: !!lat,
    refetchOnWindowFocus: false,
  });

  // Fetch weather info
  const {
    data: markerWeather,
    isLoading: isLoadingMarkerWeather,
    isError: isErrorMarkerWeather,
  } = useQuery(
    [selectedMarker?.geometry?.location?.lat],
    () => fetchWeather(selectedMarker?.geometry?.location),
    {
      enabled: !!selectedMarker?.geometry?.location?.lat,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000 * 5, // 5 minutes
    }
  );

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
    console.log(center)
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    console.log(clickedPos);

    console.log(e.latLng?.lat(), e.latLng?.lng());
  };

  const onMarkerClick = (marker: LatLngLiteral) => {
    // setSelectedMarker(marker);
    console.log(marker);
  };

  const moveTo = (position: google.maps.LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: position.lat, lng: position.lng });
      mapRef.current.setZoom(20);
      setNearbyHospitalLocation(position);
    }
  };

  const fetchDirections = (hospital: LatLngLiteral) => {
    if (!hospital) return;
    setSelectedMarker((prevValue) => ({
      ...prevValue,
      geometry: {
        location: hospital,
      },
    }));

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: center,
        destination: hospital,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections?.(result);
        }
        console.log("err");
      }
    );
  };

  const handleExportData = async () => {
    try {
      const csvData = convertDataToCSV(nearbyHospitalsData!);
      console.log(csvData);
      await UploadCSVToFirebaseStorage(
        csvData,
        setDownloadCSVLink
        // hospitalLocationSelected,
      );
      console.log("Data exported successfully");
    } catch (err: any) {
      console.log(err);
      // toast.error(err.message);
    }
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded || isLoading) {
    return (
      <div className="h-[90vh] w-full bg-gray-300 flex justify-center items-center">
        <div className="w-4 h-4 bg-white border-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <div className="mb-6 max-w-4xl w-full lg:mx-auto">
        <Places
          destination={destinationHospital!}
          setDestinationHospital={(position) => {
            setDestinationHospital(position);
            mapRef.current?.panTo(position);
            mapRef.current?.setZoom(12);
          }}
        />
        {destinationHospital && directions && (
          <Distance leg={directions.routes[0].legs[0]} />
        )}
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        onLoad={onLoad}
        center={center}
        options={options}
        onUnmount={onUnMount}
        // onClick={onMapClick}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: "#1976D2",
                strokeWeight: 5,
              },
            }}
          />
        )}

        {center && <Marker position={center} />}
        {nearbyHospitalLocation && (
          <>
            <Marker
              position={nearbyHospitalLocation}
              onClick={() => {
                fetchDirections(nearbyHospitalLocation);
                window.scroll(0, 200);
              }}
              icon={{
                url: "/blue-location-marker.png",
                // origin: new window.google.maps.Point(0, 0),
                // anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          </>
        )}
        {destinationHospital && (
          <>
            <Marker
              position={destinationHospital}
              onClick={() => {
                fetchDirections(destinationHospital);
                window.scroll(0, 200);
              }}
              icon={{
                url: "/blue-location-marker.png",
                // origin: new window.google.maps.Point(0, 0),
                // anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />

            <Circle center={center} radius={10000} options={closeOptions} />
            <Circle center={center} radius={20000} options={middleOptions} />
            <Circle center={center} radius={30000} options={farOptions} />
          </>
        )}

        {nearbyHospitalsData && (
          <MarkerClusterer>
            {(clusterer) => (
              <div className="">
                {nearbyHospitalsData?.map((marker) => {
                  return (
                    <Marker
                      key={marker.place_id}
                      clusterer={clusterer}
                      position={marker?.geometry?.location}
                      onClick={() => {
                        setSelectedMarker(marker);
                        setSelectedHospitalInfo?.(marker);
                        // console.log(selectedHospitalInfo);
                        fetchDirections(marker?.geometry?.location);
                      }}
                      icon={{
                        // url: marker.icon,
                        url: "/hospital-marker.png",
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                        scaledSize: new window.google.maps.Size(20, 20),
                      }}
                    />
                  );
                })}
              </div>
            )}
          </MarkerClusterer>
        )}

        {selectedHospitalInfo && selectedMarker?.geometry?.location && (
          <InfoWindow
            position={selectedMarker?.geometry?.location}
            onCloseClick={() => setSelectedMarker({} as MarkerType)}
          >
            <div>
              <h3 className="font-semibold">{selectedMarker?.name}</h3>
              {isErrorMarkerWeather && (
                <p>Couldn&apos;t get weather information</p>
              )}
              {isLoadingMarkerWeather ? (
                <p>Loading Weather ...</p>
              ) : (
                <>
                  {markerWeather?.text && <p>{markerWeather?.text}</p>}
                  {markerWeather?.temp && <p>{markerWeather?.temp} &#xb0;C</p>}
                  {selectedMarker && selectedMarker?.name ? (
                    <button
                      onClick={() => {
                        toggleModal?.();
                        setModalHeader?.("Hospital information");
                        setSelectedHospitalInfo?.(selectedMarker);
                        console.log(selectedMarker);
                      }}
                      className="underline mt-2 text-[#14532D]"
                    >
                      View more info
                    </button>
                  ) : null}
                </>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      
      <section className="mt-4 flex flex-col gap-2 w-fit ">
        <p className="font-bold">Note</p>
        <div className="flex flex-col md:flex-row gap-2">

        <div className="flex items-center gap-1 pr-2 border-r-2">
          <Image
            width={0}
            height={0}
            className="w-6 h-6"
            src="/red-location-marker.png"
            alt="red location icon"
          />{" "}
          indicates your current location
        </div>
        <div className="flex items-center gap-1 ">
          <Image
            width={0}
            height={0}
            className="w-6 h-6"
            src="/blue-location-marker.png"
            alt="blue location icon"
          />{" "}
          indicates destination location
        </div>
        </div>
      </section>
      {nearbyHospitalsData ? (
        <>
          <NearbyHospitals hospitals={nearbyHospitalsData} moveTo={moveTo} />
          {nearbyHospitalsData?.length > 0 && (
            <ExportDataButton
              handleExportData={handleExportData}
              data={nearbyHospitalsData}
            />
          )}
        </>
      ) : (
        <PostLoader />
      )}
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
