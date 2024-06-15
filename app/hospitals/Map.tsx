"use client";

// PACKAGES
import React, { useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
  LoadScript,
  useLoadScript,
} from "@react-google-maps/api";
import { useQuery } from "react-query";

// COMPONENTS
import useGeoLocation from "@/hooks/useGeoLocationHook";
import { fetchNearbyPlaces } from "@/lib/getAllHospitals";

// ASSETS
import hospitalIcon from "../../public/hospital-fill.svg";
import { fetchWeather } from "../api/api";
import mapStyles from "./mapStyles";
import CurrentLocation from "@/components/CurrentLocation";

export async function Map() {
  const {
    location: { longitude, latitude },
  } = useGeoLocation();

  // const data = fetchNearbyPlaces(latitude, longitude);
  // console.log(data);

  useEffect(() => {
console.log(location)
  },[])

  const mapContainerStyle = {
    width: "100%",
    height: "90vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const apiKey = process?.env.NEXT_PUBLIC_Google_Places_API!;
  const libraries = ["places"];
  // const { isLoaded, loadError } = useLoadScript({
  //   id: "google-map-script",
  //   googleMapsApiKey: apiKey,
  //   libraries: libraries as any
  // });
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    // libraries: libraries as any,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

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
    [latitude, longitude],
    () => fetchNearbyPlaces(latitude, longitude),
    // () => fetchNearbyPlaces(clickedPos.lat, clickedPos.lng),
    { enabled: !!latitude, refetchOnWindowFocus: false }
  );

  console.log(nearbyHospitals);

  const {
    data: markerWeather,
    isLoading: isLoadingMarkerWeather,
    isError: isErrorMarkerWeather,
  } = useQuery([selectedMarker.id], () => fetchWeather(selectedMarker), {
    enabled: !!selectedMarker.id,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 5, // 5 minutes
  });
  // console.log(markerWeather);

  const moveTo = (position: google.maps.LatLngLiteral) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: position.lat, lng: position.lng });
      mapRef.current.setZoom(12);
      setClickedPos(position);
    }
  };

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

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

  const onMarkerClick = (marker: MarkerType) => {
    console.log(marker);
    setSelectedMarker(marker);
  };
  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if(isLoading){
    return <div>Loading...</div>;
  }

  if (!isLoaded) {
    return (
      <div className="h-[90vh] w-full bg-gray-300 flex justify-center items-center">
        <div className="w-[90%] h-4 bg-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <CurrentLocation moveTo={moveTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnMount}
        center={center}
        // onClick={onMapClick}
        options={options}
      >
        {latitude ? <Marker position={center} /> : null}
        {nearbyHospitals?.map((marker, index) => {
          return(
            <Marker
            key={index}
            position={marker.geometry.location}
            onClick={() => onMarkerClick(marker)}
            icon={{
              url: "/hospital-fill.svg",
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
          )
        })}
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
    </div>
  );
}
