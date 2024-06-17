"use client";

import React, {
  useCallback,
  useEffect,
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

// COMPONENTS
import useGeoLocation from "@/hooks/useGeoLocationHook";
import { fetchNearbyPlaces } from "@/lib/getAllHospitals";
import { fetchWeather } from "../../api/api";
import mapStyles from "./mapStyles";

// ASSETS
// import hospitalIcon from "../../public/hospital-fill.svg";
import CurrentLocation from "@/components/CurrentLocation";
import Places from "./Places";
import { useGlobalProvider } from "@/context/GlobalProvider";
import Distance from "./Distance";

export function Map() {
  const mapRef = useRef<google.maps.Map | null>();
  const [destinationHospital, setDestinationHospital] =
    useState<LatLngLiteral>();
  // const { destinationHospital, setDestinationHospital} = useGlobalProvider()
  const [directions, setDirections] = useState<DirectionsResult>();
  const {
    userLocation: { lat, lng },
  } = useGeoLocation();

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

  const [clickedPos, setClickedPos] = useState<google.maps.LatLngLiteral>(
    {} as google.maps.LatLngLiteral
  );

  const [selectedMarker, setSelectedMarker] = React.useState<MarkerType>(
    {} as MarkerType
  );

  const {
    data: nearbyHospitals,
    isLoading,
    isError,
  } = useQuery(
    // [clickedPos.lat, clickedPos.lng],
    [lat, lng],
    () => fetchNearbyPlaces(lat, lng),
    // () => fetchNearbyPlaces(clickedPos.lat, clickedPos.lng),
    { enabled: !!lat, refetchOnWindowFocus: false }
  );

  // console.log(nearbyHospitals);

  // const {
  //   data: markerWeather,
  //   isLoading: isLoadingMarkerWeather,
  //   isError: isErrorMarkerWeather,
  // } = useQuery([selectedMarker.id], () => fetchWeather(selectedMarker), {
  //   enabled: !!selectedMarker.id,
  //   refetchOnWindowFocus: false,
  //   staleTime: 60 * 1000 * 5, // 5 minutes
  // });
  // console.log(markerWeather);

  // const moveTo = (position: google.maps.LatLngLiteral) => {
  //   if (mapRef.current) {
  //     mapRef.current.panTo({ lat: position.lat, lng: position.lng });
  //     mapRef.current.setZoom(12);
  //     setClickedPos(position);
  //   }
  // };

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
    console.log(center);
  };

  // const onLoad = useCallback((map : google.maps.Map): void  => (mapRef.current = map), [])

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    console.log(clickedPos);

    // setClickedPos({
    //   lat: Number(e.latLng?.lat()),
    //   lng: Number(e.latLng?.lng()),
    // });
    // setSelectedMarker({} as MarkerType);
    // fetchNearbyPlaces(latitude, longitude);
    console.log(e.latLng?.lat(), e.latLng?.lng());
  };

  const onMarkerClick = (marker: LatLngLiteral) => {
    // setSelectedMarker(marker);
    console.log(marker);
  };

  const fetchDirections = (hospital: LatLngLiteral) => {
    if (!hospital) return;
    console.log(hospital);

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: center,
        destination: hospital,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          console.log(result);
        }
        console.log("err");
      }
    );
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
      <div className="mb-6">

      <Places
        destination={destinationHospital!}
        setDestinationHospital={(position) => {
          setDestinationHospital(position);
          mapRef.current?.panTo(position);
          console.log(position);
          mapRef.current?.setZoom(12);
        }}
        />
      {directions && <Distance leg={directions.routes[0].legs[0]} />}

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
        {/* {destinationHospital && (
          <DirectionsService
            options={{
              destination: destinationHospital!,
              origin: center,
              travelMode: google.maps.TravelMode.DRIVING,
            }}
            callback={directionsCallback}
          />
        )}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )} */}

        {center && <Marker position={center} />}
        {destinationHospital && (
          <>
            <Marker
              position={destinationHospital}
              onClick={() => fetchDirections(destinationHospital)}
              icon={{
                url: "http://maps.google.com/mapfiles/ms/icons/blue.png",
                // origin: new window.google.maps.Point(0, 0),
                // anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />

            <Circle
              center={destinationHospital}
              radius={15000}
              options={closeOptions}
            />
            <Circle
              center={destinationHospital}
              radius={30000}
              options={middleOptions}
            />
            <Circle
              center={destinationHospital}
              radius={45000}
              options={farOptions}
            />
          </>
        )}

        {nearbyHospitals && (
          <MarkerClusterer>
            {(clusterer) => (
              <div className="">
                {nearbyHospitals?.map((marker) => {
                  return (
                    <Marker
                      key={marker.place_id}
                      clusterer={clusterer}
                      position={marker.geometry.location}
                      onClick={() => fetchDirections(marker.geometry.location)}
                      icon={{
                        // url: marker.icon,
                        url: "https://maps.google.com/mapfiles/ms/icons/hospitals.png",
                        // url: "/hospital-fill.svg",
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
        {/* {selectedMarker?.geometry?.location && (
          <InfoWindow
            position={selectedMarker.geometry.location}
            onCloseClick={() => setSelectedMarker({} as MarkerType)}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              {isLoadingMarkerWeather ? (
                <p>Loading Weather ...</p>
              ) : (
                <>
                  <p>{markerWeather?.text}</p>
                  <p>{markerWeather?.temp} &#xb0;C</p>
                </>
              )}
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
      {/* </LoadScript> */}
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

const generateHospitals = (position: LatLngLiteral) => {
  const _houses: Array<LatLngLiteral> = [];
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    _houses.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return _houses;
};
