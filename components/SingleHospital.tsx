"use client";
import { useEffect, useState } from "react";
type Props = {
  hospital: HospitalProps;
};

export default function SingleHospital({ hospital }: Props) {
  const [userLocation, setUserLocation]: any = useState([]);
  const getResult = async () => {
    // const res = await fetch(`https://api.distancematrix.ai/maps/api/geocode/json?latlng=${latitude},${longitude}&key=<your_access_token>`)
    const apiKey = `${process?.env?.rapidApiKey}`;
    const url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${hospital?.latitude}&lon=${hospital?.longitude}&accept-language=en&polygon_threshold=0.0`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("result", result);
      console.log("user's city", result?.address?.city);
      setUserLocation(result);
      //   setUsersRegion(result?.address?.city);
      //   setData(nearbyHospitals);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getResult();
    console.log(hospital);
  }, []);
  return (
    <section className="flex flex-col gap-3">
      <img className="w-full" src="/img-1.jpg" alt="hospital image" />
      <div>
        <h1 className="font-extrabold text-[#14532D] text-3xl tracking-tight xl:text-5xl mt-4">
          {hospital?.name}
        </h1>
        <p className="font-medium">
          Address:
          <address className="inline-block">
            {hospital?.address}, {userLocation?.address?.state}.
          </address>
        </p>
        <p className="font-medium">
          Email address: <address className="inline-block">{hospital?.email_address}</address>
        </p>
        <p>
          Delivery Option: <span>{hospital?.delivery_option}</span>
        </p>
        <p className="font-medium">
          Scope of Services:{" "}
          <span className="capitalize">{hospital?.scope_of_services}</span>
        </p>
        <p className="font-medium">Telephone: +234{hospital?.telephone}</p>
        <div className="mt-4">
          <button className="bg-[#14532D] rounded-lg text-white px-4 py-2">
            <a href={hospital?.website_address} className="">
              Visit website
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
