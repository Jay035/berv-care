import { useGlobalProvider } from "@/context/GlobalProvider";
import { useState, useEffect } from "react";

// GOOGLE API KEY
// const googleAPIKey = process?.env.NEXT_PUBLIC_Google_Places_API!;

// const getUserAddress = async (lat: number, lng: number) => {
//   console.log(lat, lng);
//   let headersList = {
//     Accept: "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//   };

//   const response = await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleAPIKey!}`,
//     {
//       method: "GET",
//       headers: headersList,
//     }
//   );
//   const data = await response.json();
//   console.log(data?.results[0]);
//   // setUserAddress?.(data?.results[0]?.formatted_address);
//   // console.log(location);

//   // const url = `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat}%2C${lng}&language=en`;
//   // const options = {
//   //   method: "GET",
//   //   headers: {
//   //     "x-rapidapi-key": apiKey,
//   //     "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
//   //   },
//   // };

//   // try {
//   //   const response = await fetch(url, options);
//   //   // const result = await response.json();
//   //   console.log(response);
//   // } catch (error) {
//   //   console.error(error);
//   // }
// };


const useGeoLocation = () => {
  // const { userAddress, setUserAddress } = useGlobalProvider();
  const [userLocation, setUserLocation] = useState
  // <google.maps.LatLngLiteral>
  ({
    lat: 0,
    lng: 0,
  });
  const [error, setError] = useState<PositionError | null>(null);

 
  useEffect(() => {
    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: "Geolocation is not supported by your browser",
      });
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setUserLocation({
        lat: position?.coords?.latitude,
        lng: position.coords.longitude,
      }); 
    };

    const onError = (error: GeolocationPositionError) => {
      setError({ code: error.code, message: error.message });
      console.log({ code: error.code, message: error.message });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);


  return { userLocation, error };
};

export default useGeoLocation;


