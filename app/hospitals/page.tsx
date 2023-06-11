import getAllHospitals from "@/lib/getAllHospitals";
import { Metadata } from "next";
import { Suspense, lazy } from "react";

const HospitalResults = lazy(() => import("@/components/HospitalResults"));

type Props = {};

export const metadata : Metadata = {
  title: "Berv-Care | Hospitals",
  openGraph: {
    title: "Berv-Care | Hospitals",
  },
};

export default async function HospitalsPage({}: Props) {
  const hospitalData = getAllHospitals();
  // const hospitalData : Promise<Hospital[]> = getAllHospitals();
  const hospitals = await hospitalData;

  return (
    <main className="px-8 sm:px-[9.5vw] mt-6">
      <h1 className="mb-8 max-w-3xl mx-auto text-center font-extrabold text-[#14532D] text-3xl tracking-tight xl:text-5xl">
        Find Hospitals Around You, With Ease
      </h1>

      <Suspense fallback={<h2>Loading....</h2>}>
        <HospitalResults hospitals={hospitals} />
      </Suspense>
      {/* <section className="">
        <CustomInput />

        <div className="my-12 grid gap-4">
          {hospitals?.data?.map((hospital: HospitalProps) => (
            <section
              key={hospital?.id}
              className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2"
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-[#14532d]">{hospital?.name}</h2>
                <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
              </div>
              <Link
                href={`/hospitals/${hospital?.id}`}
                className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
              >
                View
              </Link>
            </section>
          ))}
        </div>
      </section> */}
    </main>
  );
}
