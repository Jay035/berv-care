"use client";
// import logoIcon from "/logo.svg";
// import locationIcon from "/location.png";
// import searchIcon from "/search-icon.png";
// import cart from "/cart.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomInput from "./CustomInput";

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
        <li className="cursor-pointer transition">About us</li>
        <li className="cursor-pointer transition">How It Works</li>
        <li className="cursor-pointer transition">Health Center</li>

        {/* CTA */}
        <button
          onClick={(e: any) => {
            e.preventDefault();
            setMenuShown((prevState: boolean) => !prevState);
          }}
          className="lg:hidden rounded-[50px] max-w-xs w-fit mx-auto px-6 py-2 text-white transition bg-[#14532D] border hover:bg-white hover:border-black hover:text-black"
        >
          <Link href="/hospitals">Get Started</Link>
        </button>
      </ul>
      <button
        onClick={(e: any) => {
          e.preventDefault();
          setMenuShown((prevState: boolean) => !prevState);
        }}
        className="hidden sm:text-lg lg:flex rounded-[50px] w-fit mx-auto lg:mx-0 px-6 py-2 text-white transition bg-[#14532D] border hover:bg-white hover:border-black hover:text-black"
      >
        <Link href="/hospitals">Get Started</Link>
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
