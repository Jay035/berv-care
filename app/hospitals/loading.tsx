import Image from "next/image";


export default function Loader() {
  return (
    // <div className="flex items-center justify-center">
    //   <Image
    //     className="w-7 animate-pulse"
    //     src="/logo.svg"
    //     width={48}
    //     height={48}
    //     alt="logo"
    //   />
    // </div>
    <div className="px-[9.5vw]">
      <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
      <section className="mt-12 grid gap-4 w-full lg:grid-cols-2">
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
        <div className="bg-[#43554a21] animate-pulse w-full h-20 rounded-lg"></div>
      </section>
    </div>
  );
}
