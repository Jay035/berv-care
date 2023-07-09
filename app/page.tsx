import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import MeetOurDoctors from "@/components/MeetOurDoctors";
import { Navbar } from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import { AuthProvider } from "@/context/Auth";

export default function Home() {
  return (
    // dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert/
    <AuthProvider>
      <Navbar />
      <main className="mt-[4.56rem] mb-[3.375rem]">
        <HeroSection />
        <HowItWorks />
        <Why />
        <MeetOurDoctors />
        <Testimonials />
        <Blog />
        <NewsLetter />
        <Footer />
      </main>
    </AuthProvider>
  );
}
