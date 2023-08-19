"use client";
import { useEffect, useState } from "react";
import img from "../public/img-1.jpg";
import Image from "next/image";
// import ReactMapGL, { Marker } from'react-map-gl'; // for map
type Props = {
  hospital: HospitalProps;
};

export default function SingleHospital({ hospital }: Props) {
  const [userLocation, setUserLocation]: any = useState([]);
  const getLocation = async () => {
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
      setUserLocation(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getLocation();
    console.log(hospital);
  }, []);
  return (
    <section className="">
      <div className="grid lg:grid-cols-[70%_30%] gap-10">
        <section>
          <Image
            className="w-full lg:h-[70%] object-cover"
            src={img}
            alt="hospital image"
          />
          <h1 className="capitalize font-extrabold text-[#14532D] text-3xl tracking-tight md:text-4xl xl:text-5xl mt-4">
            {hospital?.name}
          </h1>
        </section>
        <section className="flex flex-col gap-4">
          <p className="mt-2">
            <span className="font-medium text-lg">Address: </span>{" "}
            <span>
              {hospital?.address},{" "}
              {userLocation?.address?.state && userLocation?.address?.state},{" "}
              Nigeria.
            </span>
          </p>
          {hospital?.email_address && (
            <p className="">
              <span className="font-medium text-lg">Email address:</span>{" "}
              <span className="break-words break-keep">
                {hospital?.email_address}
              </span>
            </p>
          )}
          {hospital?.delivery_option && (
            <p>
              <span className="font-medium text-lg">Delivery Option:</span>{" "}
              <span>{hospital?.delivery_option}</span>
            </p>
          )}
          {hospital?.scope_of_services && (
            <p className="">
              <span className="font-medium text-lg">Scope of Services:</span>{" "}
              <span className="capitalize">{hospital?.scope_of_services}</span>
            </p>
          )}
          {hospital?.telephone && (
            <p className="">
              <span className="font-medium text-lg">Telephone:</span>
              <span> (+234) {hospital?.telephone}</span>
            </p>
          )}
          <div className="mt-4">
            {hospital?.website_address && (
              <button className="bg-[#14532D] rounded-lg text-white px-4 py-2">
                <a
                  href={hospital?.website_address}
                  target="_blank"
                  className=""
                >
                  Visit website
                </a>
              </button>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
