import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    // dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert/
    <main className="mt-[4.56rem] mb-[3.375rem]">
      <HeroSection />
      <HowItWorks />
      <Why />
    </main>
  );
}
