import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import { Navbar } from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PostLoader, { BlogPostLoader } from "@/components/PostLoader";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

export default function Home() {
  return (
    <div className="relative">
      {/* <Navbar /> */}
      <main className="pt-40 lg:pt-10 xl:pt-20 pb-[3.375rem]">
        <HeroSection />
        <HowItWorks />
        <Why />
        <MeetOurDoctors />
        <Testimonials />
        <Blog />
        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
}
