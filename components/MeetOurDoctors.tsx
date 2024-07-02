import Image from "next/image";
import img from "../public/doctors.png";

type Props = {};

export default function MeetOurDoctors({}: Props) {
  return (
    <section className="px-8 sm:px-[6vw] mb-28 flex flex-col justify-center items-center">
      <h1 className="text-[28px] md:text-[32px] text-center tracking-tight text-[#14532D] leading-10 font-semibold">
        Meet our Doctors
      </h1>

      {/* <p className="mt-4 text-center md:text-lg text-[#6B7280] max-w-[867px] mx-auto">
      Skip the long queues. We’ll bring the doctor to you!
      </p> */}
      <Image
        placeholder="blur"
        className="my-8 w-full h-[40vh] object-cover md:h-fit"
        src={img}
        alt="doctors smiling"
      />
      <button className="rounded-[50px] w-fit mx-auto text-white transition bg-[#14532D] hover:bg-[#14532D]/70 py-3 md:py-4 sm:py-[18px] px-6 md:px-14">
        See all doctors
      </button>
    </section>
  );
}
