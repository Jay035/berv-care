import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import PostLoader from "@/components/PostLoader";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";
import { Map } from "./components/Map";
import getHospitalData, { fetchNearbyPlaces } from "@/lib/getAllHospitals";
import useGeoLocation from "@/hooks/useGeoLocationHook";

const HospitalResults = dynamic(() => import("@/components/HospitalResults"));

export const metadata: Metadata = {
  title: `Berv-Care | Hospitals`,
  description: `Your Pathway to Trusted Care Providers`,
};

export default async function HospitalsPage() {
  const hospitalData = getHospitalData();
  const hospitals = await hospitalData;

  console.log(hospitals);

  return (
    <>
      {/* <Navbar /> */}
      <main className="px-8 sm:px-[9.5vw] pb-12 pt-40">
        <h1
          data-testid="hospital_page_title"
          className="mb-8 max-w-3xl mx-auto text-center font-extrabold text-[#14532D] text-3xl tracking-tight xl:text-5xl"
        >
          Find Hospitals Around You, With Ease
        </h1>

        <Map />
        
        {/* <Suspense fallback={<PostLoader />}>
          <HospitalResults hospitals={hospitals} />
        </Suspense> */}
      </main>
      <Footer />
    </>
  );
}
