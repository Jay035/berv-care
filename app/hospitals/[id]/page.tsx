import PostLoader from "@/components/PostLoader";
import getHospital from "@/lib/getHospital";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense, lazy } from "react";

const SingleHospital = lazy(() => import("@/components/SingleHospital"));

type IndividualHospitalParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: IndividualHospitalParams): Promise<Metadata> {
  const hospitalData = getHospital(id);
  const hospital = await hospitalData;

  return {
    title: hospital?.name,
    description: `Your Pathway to Trusted Care Providers`,
  };
}

export default async function HospitalPage({
  params: { id },
}: IndividualHospitalParams) {
  const hospitalData = getHospital(id);
  const hospital = await hospitalData;
  console.log(hospital);
  return (
    <main className="px-8 sm:px-[9.5vw] mt-4 mb-8">
      <Link
        href="/hospitals"
        className="w-fit flex items-center gap-1 text-lg lg:text-2xl mb-2 font-semibold text-[#14532D]"
      >
        <i className="ri-arrow-drop-left-line text-[#14532D] text-3xl lg:text-4xl"></i>{" "}
        Go back
      </Link>
      <Suspense fallback={<PostLoader />}>
        <SingleHospital hospital={hospital} />
      </Suspense>
    </main>
  );
}
