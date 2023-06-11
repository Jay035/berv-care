import Image from "next/image";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="px-[9.5vw] mb-28">
      <h1 className="text-[28px] md:text-[32px] text-center tracking-tight text-[#14532D] leading-10 font-semibold">
        Testimonials!
      </h1>
      <p className="mt-4 mb-8 text-center md:text-lg text-[#6B7280] max-w-[867px] mx-auto">
        We have thousands of our happy customers leaving reviews on their
        experiences. Hear what they have to say{" "}
      </p>
      <div className="grid">
        <section className="bg-[#FFFBEB] px-8 border-2 border-black pt-[65.36px] pb-[45px]">
          <Image src="/quote.svg" width={31} height={31} alt="quotes" />
          <p className="mt-[61.4px]">
            Everything went well and Smoothly. Technician was right on time to
            pick up sample. It was a seamless expereince, One i would easily
            recommend to my friends.
          </p>
          <hr className="my-6 border-[#111827]" />
          <h3>Ikechukwu Ogujiaba</h3>
        </section>
        <section className="bg-[#FFFBEB] px-8 border-2 border-t-0 border-black pt-[65.36px] pb-[45px]">
          <Image src="/quote.svg" width={31} height={31} alt="quotes" />
          <p className="mt-[61.4px]">
            Everything went well and Smoothly. Technician was right on time to
            pick up sample. It was a seamless expereince, One i would easily
            recommend to my friends.
          </p>
          <hr className="my-6 border-[#111827]" />
          <h3>Ikechukwu Ogujiaba</h3>
        </section>
        <section className="bg-[#FFFBEB] px-8 border-2 border-t-0 border-black pt-[65.36px] pb-[45px]">
          <Image src="/quote.svg" width={31} height={31} alt="quotes" />
          <p className="mt-[61.4px]">
            Everything went well and Smoothly. Technician was right on time to
            pick up sample. It was a seamless expereince, One i would easily
            recommend to my friends.
          </p>
          <hr className="my-6 border-[#111827]" />
          <h3>Ikechukwu Ogujiaba</h3>
        </section>
      </div>
    </section>
  );
}
