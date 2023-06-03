import HeroSection from '@/components/HeroSection'
import Image from 'next/image'

export default function Home() {
  return (
    // dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert/ 
    <main className="grid items-center lg:grid-cols-2 gap-[7.25rem] mt-[4.56rem] mb-[3.375rem] font-Sora ">
      <HeroSection />

    </main>
  )
}
