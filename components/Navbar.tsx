"use client";
// import logoIcon from "/logo.svg";
// import locationIcon from "/location.png";
// import searchIcon from "/search-icon.png";
// import cart from "/cart.png";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };

  return (
    <header className="grid grid-cols-2 xl:grid-cols-1 justify-between items-center py-7 font-Sora px-8 sm:px-[9.5vw]">
      <Image
        className="w-7 xl:hidden"
        src="/logo.svg"
        width={28}
        height={28}
        alt="logo"
      />
      {/* menu */}
      <nav
        className={`${
          menuShown
            ? ` top-0 left-0 w-full h-screen  bg-white transition-all items-start pt-20`
            : `-left-full xl:left-0`
        } absolute flex flex-col xl:flex-row xl:justify-between gap-[77px] overflow-hidden`}
      >
        <Image
          className="w-7 hidden xl:inline-flex"
          src="/logo.svg"
          width={28}
          height={28}
          alt="logo"
        />
        <section
          className={`${
            menuShown ? `flex-col w-[90%] mx-auto` : `flex-row`
          } flex gap-16 xl:gap-10 justify-center items-center`}
        >
          <div className="grid md:grid-cols-[auto,1fr] gap-3 md:gap-0 md:border py-4 md:rounded-[50px] w-full max-w-xl">
            {/* location section */}
            <section className="flex justify-start items-center order-last flex-none flex-grow-0 text-[#9CA3AF] py-2 px-2 md:py-0.5 md:px-6 gap-[9.5px] border rounded-lg w-full md:border-0 md:rounded-none">
              <Image
                src="/location.png"
                alt="location icon"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full md:w-20 outline-none"
              />
            </section>
            {/* search section */}
            <section className="flex justify-start items-center flex-none flex-grow-0 text-[#9CA3AF] py-2 px-2 md:py-0.5 md:px-6 gap-[9.5px] border rounded-lg w-full md:border-0 md:rounded-none md:border-r-2 md:border-[#6B7280]">
              <Image
                src="/search-icon.png"
                alt="search icon"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Search tests, doctors"
                className="w-full md:w-fit outline-none"
              />
            </section>
          </div>
          {/* menu */}
          {/* <div className="w-full pl-2 xl:pl-0"> */}
          <ul className="flex justify-start items-start sm:justify-center sm:items-center pl-2 xl:pl-0 xl:justify-between flex-col xl:flex-row text-[#6B7280] gap-10 xl:gap-14 2xl:gap-9 mb-0 w-full">
            <li className="cursor-pointer transition">Lab tests</li>
            <li className="cursor-pointer transition">About us</li>
            <li className="cursor-pointer transition">Pricing</li>
            <li className="cursor-pointer transition">Health Center</li>
          </ul>
          {/* </div> */}
        </section>
        {/* buttons */}
        <section className="flex justify-between items-center gap-6 flex-col w-full 2xl:w-fit mx-auto xl:flex-row text-lg">
          {/* shopping cart */}
          <Image
            src="/cart.png"
            alt="cart"
            width={24}
            height={24}
            className="cursor-pointer hidden xl:flex"
          />
          {/* log in button */}
          <button className="rounded-[50px] w-[90%] max-w-xs xl:w-fit px-6 py-2 border transition border-gray-300 hover:bg-[#2B7669] hover:text-white">
            Log In
          </button>
          {/* Take quiz button */}
          <button className="rounded-[50px] w-[90%] max-w-xs xl:w-fit px-6 py-2 text-white transition bg-[#2B7669] border hover:bg-white hover:border-black hover:text-black">
            Take Quiz
          </button>
        </section>
      </nav>
      {/* hamburger */}
      <div
        onClick={toggleMenu}
        className="z-[999999999999] grid justify-self-end justify-between flex-col xl:hidden gap-1.5 cursor-pointer rounded-md"
      >
        <span className={`w-9 h-[3px] bg-black transition-all ease-out duration-150 delay-75 ${menuShown ? `rotate-[45deg] translate-y-4 w-6` : ``}`}></span>
        <span className={`w-9 h-[3px] bg-black transition-all duration-150 ease-out delay-75 ${menuShown ? `rotate-[495deg] translate-y-2 w-6 ` : ``}`}></span>
        <span className={`ml-auto mr-0 w-6 h-[3px] bg-black transition-all ease-out duration-150 delay-75 ${menuShown ? `hidden` : ``}`}></span>
      </div>
    </header>
  );
};
