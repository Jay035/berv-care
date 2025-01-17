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
  const [userLocation, setUserLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [error, setError] = useState<PositionError | null>(null);

  const fetchFallbackLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      console.log("Fallback location:", data);
      setUserLocation({
        lat: data.latitude,
        lng: data.longitude,
      });
    } catch (err) {
      console.error("Failed to fetch fallback location:", err);
    }
  };

  useEffect(() => {
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

    const getLocationWithRetry = (retries = 3) => {
      if (retries === 0) {
        setError({ code: "LOCATION_ERROR", message: "Failed to get location" });
        console.error("Max retries reached. Location unavailable.");
        fetchFallbackLocation();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          handleSuccess(position);
        },
        (error) => {
          handleError(error);
          console.error("Retrying... Remaining attempts:", retries - 1);
          setTimeout(() => getLocationWithRetry(retries - 1), 1000);
        },
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 0 }
      );
    };

    getLocationWithRetry();
  }, []);

  return { userLocation, error };
};

export default useGeoLocation;
