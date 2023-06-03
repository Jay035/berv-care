import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="grid items-center lg:grid-cols-2 gap-[7.25rem] mt-4 mb-[3.375rem] px-8 sm:px-[9.5vw]">
      <div className="w-full mx-auto text-center md:w-[32rem] lg:w-full lg:text-left xl:w-[32.3rem]">
        <p className="font-semibold text-base text-[#6B7280] mb-1">
          Find the Care You Deserve, With Ease
        </p>
        <h1 className="font-extrabold text-[#14532D] text-3xl xl:text-5xl">
          Your Pathway to Trusted Care Providers
        </h1>
        <p className="mt-4 text-lg text-[#374151]">
          With <span className="font-bold text-[#14532D]">Berv-care</span>,
          finding the nearest care has never been easier.
          {/* Embrace peace of mind
          knowing that your loved ones are in the hands of dedicated caregivers
          who genuinely care.  */}
          You can also access the best body tests and doctors without leaving
          home. Need help with booking your test? Our quiz is here to guide you.
          Start your journey to exceptional care today.
        </p>
        {/* CTAs */}
        <div className="mt-12 flex flex-col place-items-center md:flex-row gap-4 text-lg">
          <Link
            href="/hospitals"
            className="py-4 w-[11.25rem] md:w-full bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black"
          >
            Get Started
          </Link>
          {/* <button className="capitalize py-4 w-[11.25rem] md:w-full bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black">
            Get Started
          </button>
          <button className="py-4 w-[11.25rem] md:w-full rounded-[50px] border border-black transition hover:bg-[#14532D] hover:text-white hover:border-none">
            Book Test
          </button> */}
        </div>
      </div>
      <div className="">
        <Image
          src="/doctor-1.png"
          width={500}
          height={500}
          alt="doctor treating patient"
        />
      </div>
    </section>
  );
}
