// HOOKS
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";

// COMPONENTS
import { Map } from "./components/Map";
import getHospitalData from "@/lib/getAllHospitals";

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
    <main className="px-8 sm:px-[6vw] pb-12 pt-40">
      <h1
        data-testid="hospital_page_title"
        className="mb-8 max-w-3xl mx-auto text-center font-extrabold text-[#14532D] text-3xl tracking-tight xl:text-5xl"
      >
        Find Hospitals Around You, With Ease
      </h1>

      {/* <Suspense fallback={<PostLoader />}> */}
      <Map />
      {/* <HospitalResults hospitals={hospitals} /> */}
      {/* </Suspense> */}
    </main>
  );
}
