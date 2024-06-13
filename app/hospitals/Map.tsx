"use client";
import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow
} from "@react-google-maps/api";
import useGeoLocation from "@/hooks/useGeoLocationHook";
import { useQuery } from "react-query";
import { fetchNearbyPlaces } from "@/lib/getAllHospitals";

// ASSETS
import hospitalIcon from "../../public/hospital-fill.svg";

type Props = {};

export function Map({}: Props) {
  const {
    location: { longitude, latitude },
  } = useGeoLocation();

  const mapContainerStyle = {
    width: "100%",
    height: "90vh",
  };
  const center = {
    lat: latitude,
    lng: longitude,
  };
  const apiKey = process?.env.NEXT_PUBLIC_Google_Places_API!;

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const [clickedPos, setClickedPos] = useState<google.maps.LatLngLiteral>(
    {} as google.maps.LatLngLiteral
  );

  const {
    data: nearbyPositions,
    isLoading,
    isError,
  } = useQuery(
    [clickedPos.lat, clickedPos.lng],
    () => fetchNearbyPlaces(clickedPos.lat, clickedPos.lng),
    { enabled: !!clickedPos.lat, refetchOnWindowFocus: false }
  );

  // console.log(nearbyPositions);

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  const onUnMount = (): void => {
    mapRef.current = null;
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    setClickedPos({
      lat: Number(e.latLng?.lat()),
      lng: Number(e.latLng?.lng()),
    });
  };

  const onMarkerClick = (marker: MarkerType) => console.log(marker);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="h-[90vh] w-full bg-gray-300">Loading maps</div>;
  }

  return (
    <div className="mb-10">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnMount}
        center={center}
        onClick={onMapClick}
      >
        <Marker position={center} />
        {nearbyPositions?.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.location}
            onClick={() => onMarkerClick(marker)}
            icon={{
              url: hospitalIcon,
              // origin: new window.google.maps.Point(0, 0),
              // anchor: new window.google.maps.Point(25, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );

 }
