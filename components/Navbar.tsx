"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetStartedBtn from "./GetStartedBtn";
import { auth } from "@/config/Config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const router = useRouter();
  const dp = auth?.currentUser?.photoURL;
  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };
  const logOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  // console.log(auth?.currentUser);

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
        } absolute items-center z-30 sm:text-lg text-[#6B7280] lg:relative flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-10 overflow-hidden`}
      >
        <li
          onClick={(e: any) => {
            e.preventDefault();
            setMenuShown((prevState: boolean) => !prevState);
          }}
        >
          <Link href="/" className="cursor-pointer transition">
            About us
          </Link>
        </li>
        <li
          onClick={(e: any) => {
            e.preventDefault();
            setMenuShown((prevState: boolean) => !prevState);
          }}
        >
          <Link href="/#howItWorks" className="cursor-pointer transition">
            How It Works
          </Link>
        </li>
        <li
          onClick={(e: any) => {
            e.preventDefault();
            setMenuShown((prevState: boolean) => !prevState);
          }}
        >
          <Link href="/blog" className="cursor-pointer transition">
            Health Center
          </Link>
        </li>
        <div className="lg:hidden mt-5 ">
          {!auth.currentUser && (
            <div className="flex flex-col items-center gap-7">
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  setMenuShown((prevState: boolean) => !prevState);
                }}
                className=""
              >
                <Link
                  href="/login"
                  className="py-3 md:py-4 w-fit px-8 text-lg md:px-14 text-[#14532D] border border-[#14532D] bg-white rounded-[50px] transition "
                >
                  Login
                </Link>
              </button>
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  setMenuShown((prevState: boolean) => !prevState);
                }}
                className=""
              >
                {/* <GetStartedBtn /> */}
                <Link
                  href="/signup"
                  className="py-3 md:py-4 w-fit px-8 text-lg md:px-14 bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black"
                >
                  Sign up
                </Link>
              </button>
            </div>
          )}

          {auth.currentUser && (
            <div className="flex flex-col items-center gap-4">
              <div
                className="px-[18px] py-[10px] border border-[#14532D] rounded-[50px]"
                onClick={(e: any) => {
                  e.preventDefault();
                  setMenuShown((prevState: boolean) => !prevState);
                }}
              >
                <Link href="/postBlog" className="text-[#14532D] font-semibold">
                  Post a Blog
                </Link>
              </div>
              <div className="flex items-center gap-4 px-[18px] py-[10px] border border-[#EAECF0] rounded-[50px]">
                <img
                  width={28}
                  height={28}
                  className="rounded-full"
                  src="{auth?.currentUser?.photoURL}"
                  alt="profile pic"
                />
                {/* <p className="">
                  {auth?.currentUser?.displayName || auth?.currentUser?.email}
                </p> */}
              </div>
              <p
                onClick={(e) => {
                  logOut();
                  setMenuShown((prevState: boolean) => !prevState);
                }}
                className="bg-[#14532D] text-center text-white px-[39.5px] py-[10px] rounded-[50px] cursor-pointer"
              >
                SIGN OUT
              </p>
            </div>
          )}
        </div>
      </ul>
      {/* <button className="hidden lg:flex ">
        <GetStartedBtn />
      </button> */}
      <div className="hidden lg:flex">
        {!auth.currentUser && (
          <div className="flex gap-4 items-center">
            <Link
              href="/login"
              className="cursor-pointer py-3 w-fit px-8 text-lg bg-transparent text-[#14532D] rounded-[50px] transition hover:text-black border border-black"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="cursor-pointer py-3 w-fit px-8 text-lg bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              Sign up
            </Link>
          </div>
        )}
        {auth.currentUser && (
          <div className="flex items-center gap-4">
            <div
              className="px-[18px] py-[10px] border border-[#14532D] rounded-[50px]"
              onClick={(e: any) => {
                e.preventDefault();
                setMenuShown((prevState: boolean) => !prevState);
              }}
            >
              <Link href="/postBlog" className="text-[#14532D] font-semibold">
                Post a Blog
              </Link>
            </div>
            <div className="flex items-center gap-4 px-[18px] py-[10px] border border-[#EAECF0] rounded-[50px]">
              <Image
                width={28}
                height={28}
                className="rounded-full"
                src={`/${auth?.currentUser?.photoURL}`}
                alt="profile pic"
              />
              {/* <p className="">
                {auth?.currentUser?.displayName || auth?.currentUser?.email}
              </p> */}
            </div>
            <p
              onClick={(e) => {
                logOut();
                setMenuShown((prevState: boolean) => !prevState);
              }}
              className="bg-[#14532D] text-center text-white px-[39.5px] py-[10px] rounded-[50px] cursor-pointer"
            >
              SIGN OUT
            </p>
          </div>
        )}
      </div>
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
