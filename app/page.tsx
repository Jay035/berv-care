"use client";
import Blog from "@/components/Blog/Blog";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import { useState } from "react";

export default function Home() {
  const [ subscribeButtonClicked, setSubscribeButtonClicked]  =
  useState(false);
  return (
    <main className="pt-40 lg:pt-10 xl:pt-28 pb-[3.375rem] relative">
      {subscribeButtonClicked && (
        <div className="fixed z-[99999999999999999] border shadow-lg text-lg sm:text-xl flex gap-4 top-0 right-0 bg-white px-2 py-4 w-full max-w-md h-fit">
          {" "}
          <i className="ri-checkbox-circle-line text-xl text-green-500"></i>
          Congratulations, you have subscribed to our newsletter
        </div>
      )}
      <HeroSection />
      <HowItWorks />
      <Why />
      <MeetOurDoctors />
      <Testimonials />
      <Blog />
      <NewsLetter setSubscribeButtonClicked={setSubscribeButtonClicked} />
    </main>
  );
}
