import Image from "next/image";
import img from "../public/doctor-1.png";
import GetStartedBtn from "./GetStartedBtn";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="grid items-center lg:grid-cols-2 gap-[7.25rem] mt-4 lg:h-[70vh] lg:items-center lg:justify-center lg:mt-0 lg:mb-0 mb-[3.375rem] px-8 sm:px-[9.5vw]">
      <div className="w-full mx-auto text-center md:w-[32rem] lg:w-full lg:text-left">
        <p className="font-semibold text-base xl:text-lg text-[#6B7280] mb-1">
          Find the Care You Deserve, With Ease
        </p>
        <h1 className="font-extrabold text-[#14532D] text-3xl md:text-4xl xl:text-6xl">
          Your Pathway to Trusted Care Providers
        </h1>
        <p
          // contentEditable={true}
          className="mt-4 text-lg xl:text-xl text-[#374151]"
        >
          With <span className="font-bold text-[#14532D]">Berv-Care</span>,
          finding the nearest care has never been easier. Start your journey to
          exceptional care today.
          {/* You can also access
          the best body tests and doctors without leaving home. Need help with
          booking your test? Our quiz is here to guide you.  */}
          {/* Embrace peace of mind
          knowing that your loved ones are in the hands of dedicated caregivers
          who genuinely care.  */}
        </p>
        {/* CTAs */}
        <div className="mt-12 text-lg">
          <GetStartedBtn />
        </div>
      </div>
      <div className="">
        <Image placeholder="blur" src={img} className="w-full" alt="doctor treating patient" />
      </div>
    </section>
  );
}
