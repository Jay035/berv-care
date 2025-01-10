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
  const [userLocation, setUserLocation] = useState(
    // <google.maps.LatLngLiteral>
    {
      lat: 0,
      lng: 0,
    }
  );
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

    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: "Geolocation is not supported by your browser",
      });
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setUserLocation({
        lat: position?.coords?.latitude,
        lng: position.coords.longitude,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error("Geolocation Error Details:", {
        code: error.code,
        message: error.message,
      });
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setError({
            code: error.code,
            message: "Permission denied. Please allow location access.",
          });
          break;
        case error.POSITION_UNAVAILABLE:
          setError({
            code: error.code,
            message: "Location unavailable. Please try again.",
          });
          break;
        case error.TIMEOUT:
          setError({
            code: error.code,
            message: "Location request timed out. Retry?",
          });
          break;
        default:
          setError({
            code: error.code,
            message: "An unknown error occurred.",
          });
      }
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: false, // Switch to false for better availability
      timeout: 20000,           // Increase timeout to allow more time
      maximumAge: 0,            // Always request the latest position
    });

    // navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     console.log("Location:", position);
    //   },
    //   (error) => {
    //     if (error.code === error.POSITION_UNAVAILABLE) {
    //       console.error("Location unavailable. Please try again.");
    //     } else if (error.code === error.PERMISSION_DENIED) {
    //       console.error("Permission denied. Enable location services.");
    //     } else if (error.code === error.TIMEOUT) {
    //       console.error("Location request timed out. Retry?");
    //     } else {
    //       console.error("An unknown error occurred:", error);
    //     }
    //   },
    //   { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    // );
  }, []);

  return { userLocation, error };
};

export default useGeoLocation;
