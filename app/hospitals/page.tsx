import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import PostLoader from "@/components/PostLoader";
import getAllHospitals from "@/lib/getAllHospitals";
import { Metadata } from "next";
import { Suspense, lazy } from "react";

const HospitalResults = lazy(() => import("@/components/HospitalResults"));

export const metadata: Metadata = {
  title: `Berv-Care | Hospitals`,
  description: `Your Pathway to Trusted Care Providers`,
};

export default async function HospitalsPage() {
  const hospitalData = getAllHospitals();
  const hospitals = await hospitalData;

  return (
    <div className="">
      <Navbar />
      <main className="px-8 sm:px-[9.5vw] mt-6 py-12">
        <h1 className="mb-8 max-w-3xl mx-auto text-center font-extrabold text-[#14532D] text-3xl tracking-tight xl:text-5xl">
          Find Hospitals Around You, With Ease
        </h1>
        <div id="map"></div>

        <Suspense fallback={<PostLoader />}>
          <HospitalResults hospitals={hospitals} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
