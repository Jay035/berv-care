// "use client";

import { useGlobalProvider } from "@/context/GlobalProvider";
import { toast } from "react-toastify";

const place_Radius = 2500; // 2500 meters
const type = "hospital";

export default async function getHospitalData() {
  const res = await fetch("https://api.reliancehmo.com/v3/providers");
  console.log(res);
  // const { locationCoord } = useGlobalProvider();

  // const response = await fetch(
  //   `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
  //     locationCoord?.coordinates?.latitude
  //   },${
  //     locationCoord?.coordinates?.longitude
  //   }&radius=10000&type=hospital&keyword=hospital&name=hospital&key=${process
  //     ?.env.NEXT_PUBLIC_Google_Places_API!}`
  // );
  // const data = await response.json();
  console.log(res);

  if (!res.ok) {
    toast.error("Failed to fetch data");
  }
  return res.json();
}

export const fetchNearbyPlaces = async (
  lat: number,
  lng: number
): Promise<MarkerType[]> => {
  const apiKey = process?.env.NEXT_PUBLIC_Google_Places_API!;

  const url = `https://trueway-places.p.rapidapi.com/FindPlacesNearby?location=${lat}%2C${lng}&type=${type}&radius=${place_Radius}&language=en`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "trueway-places.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  console.log(data);

  return data.results;
};
