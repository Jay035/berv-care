"use client";
import Image from "next/image";
import img from "../public/doctor-1.png";
import GetStartedBtn from "./GetStartedBtn";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";

type Props = {};

export default function HeroSection({}: Props) {
  useGSAP(() => {
    const heroText = new SplitType(".hero_text", { types: "words" });

    gsap.from([heroText.words, "#hero_btn", "#hero_img"], {
      y: 24,
      opacity: 0,
      duration: 0.8,
      stagger: { amount: 1 },
      ease: "ease",
    });
  }, []);
  return (
    <section className="grid items-center lg:grid-cols-2 gap-[7.25rem] lg:h-[90vh] lg:justify-center lg:mt-0 lg:mb-0 mb-[3.375rem] px-8 sm:px-[6vw]">
      <div className="flex flex-col items-center lg:items-start md:w-[32rem] mx-auto lg:w-full">
        <p className="hero_text overflow-hidden text-center lg:text-left font-semibold text-base xl:text-lg text-[#6B7280] mb-1">
          Find the Care You Deserve, With Ease
        </p>
        <h1 className="hero_text font-extrabold overflow-hidden text-center lg:text-left text-[#14532D] text-3xl md:text-4xl xl:text-6xl">
          Your Pathway to Trusted Care Providers
        </h1>
        <p
          data-testid="hero-subtext"
          className="hero_text text-center overflow-hidden lg:text-left mt-4 text-lg xl:text-xl text-[#374151]"
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
        <div id="hero_btn" className="mt-12 text-lg">
          <GetStartedBtn />
        </div>
      </div>
      <div className="z-10">
        <Image
          id="hero_img"
          placeholder="blur"
          priority
          src={img}
          className="w-full"
          alt="doctor treating patient"
        />
      </div>
    </section>
  );
}
