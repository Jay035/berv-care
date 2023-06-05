import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="px-8 sm:px-[9.5vw] mt-6">
      <h1 className="mb-8 max-w-3xl mx-auto text-center font-extrabold text-[#14532D] text-3xl tracking-tight xl:text-5xl">
        Find Hospitals Around You, With Ease
      </h1>

      <section className="">
        <CustomInput />
        {/* search result for "" */}
        {/* Results */}
        {/* api
        https://api.reliancehmo.com/v3/providers */}

        
        <div className="my-12 grid gap-4">
          <section className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">Hospital-1</h2>
              <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
            </div>
            <Link
              href=""
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
          <section className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">Hospital-1</h2>
              <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
            </div>
            <Link
              href=""
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
          <section className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">Hospital-1</h2>
              <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
            </div>
            <Link
              href=""
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
          <section className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">Hospital-1</h2>
              <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
            </div>
            <Link
              href=""
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
          <section className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">Hospital-1</h2>
              <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
            </div>
            <Link
              href=""
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
          <section className="flex justify-between items-center border border-[#2B7669] rounded-lg px-3 py-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[#14532d]">Hospital-1</h2>
              <p className="text-[#6B7280]">10-14 Safuratu Sekoni Street</p>
            </div>
            <Link
              href=""
              className="bg-[#14532D] py-2 px-4 text-white rounded-[30px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              View
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
