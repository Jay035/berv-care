"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetStartedBtn from "./GetStartedBtn";

export const Navbar = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };

  return (
    <header className="flex justify-between items-center w-full py-7 font-Sora px-8 sm:px-[9.5vw]">
      <Link href="/">
        <Image
          className="w-7"
          src="/logo.svg"
          width={28}
          height={28}
          alt="logo"
        />
      </Link>
      {/* menu */}
      <ul
        className={`${
          menuShown
            ? ` top-0 left-0 w-full h-screen bg-white lg:h-fit lg:w-fit transition-all pt-44 lg:pt-0`
            : `-left-full lg:left-0`
        } absolute items-center sm:text-lg text-[#6B7280] lg:relative flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-10 overflow-hidden`}
      >
        <Link href="/" className="cursor-pointer transition">About us</Link>
        <Link href="#howItWorks" className="cursor-pointer transition">How It Works</Link>
        <Link href="#healthCenter" className="cursor-pointer transition">Health Center</Link>

        {/* CTA */}
        <button
          onClick={(e: any) => {
            e.preventDefault();
            setMenuShown((prevState: boolean) => !prevState);
          }}
          className="lg:hidden"
        >
          <GetStartedBtn />
        </button>
      </ul>
      <button className="hidden lg:flex ">
        <GetStartedBtn />
      </button>
      {/* hamburger */}
      <div
        onClick={toggleMenu}
        className="z-[999999999999] grid justify-self-end justify-between flex-col lg:hidden gap-1.5 cursor-pointer rounded-md"
      >
        <span
          className={`w-8 sm:w-9 h-[3px] bg-black transition-all ease-out duration-150 delay-75 ${
            menuShown ? `rotate-[45deg]  w-6` : ``
          }`}
        ></span>
        <span
          className={`w-8 sm:w-9 h-[3px] bg-black transition-all duration-150 ease-out delay-75 ${
            menuShown ? `rotate-[495deg] -translate-y-2  w-6 ` : ``
          }`}
        ></span>
        <span
          className={`ml-auto mr-0 w-6 h-[3px] bg-black transition-all ease-out duration-150 delay-75 ${
            menuShown ? `hidden` : ``
          }`}
        ></span>
      </div>
    </header>
  );
};
