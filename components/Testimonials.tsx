import Image from "next/image";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <section className="px-[9.5vw] mb-12">
      <h1 className="text-[28px] md:text-[32px] text-center tracking-tight text-[#14532D] leading-10 font-semibold">
        Testimonials!
      </h1>
      <p className="mt-4 mb-8 text-center max-w-2xl mx-auto md:text-lg text-[#6B7280]">
        We have thousands of our happy customers leaving reviews on their
        experiences. Hear what they have to say{" "}
      </p>
      <div className="grid lg:grid-cols-3">
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
        <section className="bg-[#FFFBEB] px-8 border-2 border-t-0 lg:border-t-2 lg:border-l-0 border-black pt-[65.36px] pb-[45px]">
          <Image src="/quote.svg" width={31} height={31} alt="quotes" />
          <p className="mt-[61.4px]">
            Everything went well and Smoothly. Technician was right on time to
            pick up sample. It was a seamless expereince, One i would easily
            recommend to my friends.
          </p>
          <hr className="my-6 border-[#111827]" />
          <h3>Ikechukwu Ogujiaba</h3>
        </section>
        <section className="bg-[#FFFBEB] px-8 border-2 border-t-0 lg:border-t-2 lg:border-l-0 border-black pt-[65.36px] pb-[45px]">
          <Image src="/quote.svg" width={31} height={31} alt="quotes" />
          <p className="mt-[61.4px]">
            The caregivers recommended by{" "}
            <span className="font-medium">Berv-Care</span> have been a true
            blessing. Their dedication, empathy, and expertise have made a
            significant difference in the quality of life for my family members.
          </p>
          <hr className="my-6 border-[#111827]" />
          <h3>Ikechukwu Ogujiaba</h3>
        </section>
      </div>
    </section>
  );
}
