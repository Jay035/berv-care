// "use client";
import axios from "axios";
import { useGlobalProvider } from "@/context/GlobalProvider";

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
   console.error("Failed to fetch data");
  }
  return res.json();
}


