import Link from "next/link";
import CustomInput from "./CustomInput";
import { Suspense } from "react";

export default function HospitalResults({ hospitals }: any) {
  return (
    <section className="">
      <CustomInput />
      {/* search result for "" */}
      {/* Results */}
      {/* <Suspense fallback={<p>Loading feed...</p>}>
        </Suspense> */}

      <div className="my-12 grid gap-4">
        {hospitals?.data?.map((hospital: HospitalProps) => (
          <section
            key={hospital?.id}
            className="flex justify-between gap-3 items-center border border-[#2B7669] rounded-lg px-3 py-2"
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">{hospital?.name}</h2>
              <p className="text-[#6B7280]  truncate">{hospital?.address}</p>
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
    </section>
  );
}
