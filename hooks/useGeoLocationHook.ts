import { useGlobalProvider } from "@/context/GlobalProvider";
import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const { userAddress, setUserAddress } = useGlobalProvider();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState<PositionError | null>(null);
  const apiKey = process?.env.NEXT_PUBLIC_Google_Places_API!;

  const getUserAddress = async (lat: number, lng: number) => {
    // let headersList = {
    //   Accept: "*/*",
    //   "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    // };

    // const response = await fetch(
    //   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
    //     location?.latitude
    //   },${location?.longitude}&key=${process?.env
    //     .NEXT_PUBLIC_Google_Places_API!}`,
    //   {
    //     method: "GET",
    //     headers: headersList,
    //   }
    // );
    // const data = await response.json();
    // console.log(data?.results[0]?.formatted_address);
    // setUserAddress?.(data?.results[0]?.formatted_address);
    console.log(location);
    const url = `https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat}%2C${lng}&language=en`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      // const result = await response.json();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //   async function getPlaceDetails(Place) {
  //     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
  //     // Use place ID to create a new Place instance.
  //     const place = new Place({
  //         id: 'ChIJN5Nz71W3j4ARhx5bwpTQEGg',
  //         requestedLanguage: 'en', // optional
  //     });

  //     // Call fetchFields, passing the desired data fields.
  //     await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });

  //     // Log the result
  //     console.log(place.displayName);
  //     console.log(place.formattedAddress);

  //     // Add an Advanced Marker
  //     const marker = new AdvancedMarkerElement({
  //         map,
  //         position: place.location,
  //         title: place.displayName,
  //     });
  // }

  const fetchHospitalData = async () => {
    // const res = await fetch("https://api.reliancehmo.com/v3/providers");

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        location?.latitude
      },${
        location?.longitude
      }&radius=10000&type=hospital&keyword=hospital&name=hospital&key=${process
        ?.env.NEXT_PUBLIC_Google_Places_API!}`,
      {
        method: "GET",
        headers: headersList,
      }
    );
    const data = await response.json();
    console.log(data);

    // if (!response.ok) {
    //   toast.error("Failed to fetch data");
    // }
    // return response.json();
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: "Geolocation is not supported by your browser",
      });
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position?.coords?.latitude,
        longitude: position.coords.longitude,
      });
      getUserAddress(position?.coords?.latitude, position?.coords?.longitude);
    };

    const onError = (error: GeolocationPositionError) => {
      setError({ code: error.code, message: error.message });
      console.log({ code: error.code, message: error.message });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { location, error };
};

export default useGeoLocation;
