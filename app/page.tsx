import Blog from "@/components/Blog/Blog";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main className="pt-40 lg:pt-10 xl:pt-28 pb-[3.375rem] relative">
      <HeroSection />
      <HowItWorks />
      <Why />
      <MeetOurDoctors />
      <Testimonials />
      <Blog />
      <NewsLetter />
    </main>
  );
}
