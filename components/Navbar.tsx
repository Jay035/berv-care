"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/config/Config";
import { useAuth } from "@/context/Auth";

export const Navbar = () => {
  const { user, logOut }: any = useAuth();
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const [profileOptionsShown, setProfileOptionsShown] =
    useState<boolean>(false);
  const dp = auth?.currentUser?.photoURL;
  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };
  useEffect(() => {
    console.log(user);
  }, []);

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
      <div
        className={`${
          menuShown
            ? ` top-0 left-0 w-full h-screen bg-[#6B7280]/40 xl:bg-transparent backdrop-blur-sm xl:h-fit xl:w-fit transition-all `
            : `-left-full xl:left-0`
        } absolute items-center z-30 sm:text-lg text-[#6B7280] xl:relative  overflow-hidden`}
      >
        <ul className="relative w-[80%] bg-white xl:bg-transparent h-screen xl:h-fit xl:w-fit flex flex-col xl:flex-row xl:justify-between gap-8 md:gap-10 px-8 sm:px-[9.5vw] pt-44 xl:pt-0">
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
          <li
            onClick={(e: any) => {
              e.preventDefault();
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            <Link href="/hospitals" className="cursor-pointer transition">
              Find Hospitals
            </Link>
          </li>
          <div className="xl:hidden mt-5 w-full max-w-[300px]">
            {!user && (
              <div className="flex flex-col gap-8 w-fit">
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

            {user && (
              <div className="flex flex-col items-left gap-4">
                <div
                  className="px-[18px] py-[10px] w-fit border border-[#14532D] rounded-[50px]"
                  onClick={(e: any) => {
                    e.preventDefault();
                    setMenuShown((prevState: boolean) => !prevState);
                  }}
                >
                  <Link
                    href="/postBlog"
                    className="text-[#14532D] font-semibold"
                  >
                    Post a Blog
                  </Link>
                </div>
                <section className="absolute bottom-4 left-8">
                  <div className="relative w-full">
                    <div className="flex justify-between items-center cursor-pointer gap-4 px-3 py-2 border border-[#EAECF0] rounded-[50px]">
                      <div
                        className="flex items-center gap-4"
                        onClick={(e) => {
                          e.preventDefault();
                          setProfileOptionsShown((prevState) => !prevState);
                        }}
                      >
                        {user?.photoURL ? (
                          <img
                            width={28}
                            height={28}
                            className="rounded-full"
                            src={user?.photoURL}
                            alt="profile pic"
                          />
                        ) : (
                          <p className="font-bold bg-[#14532D] py-2 px-4 text-white rounded-full">
                            {user?.displayName.slice(0, 1) ||
                              user?.email.slice(0, 1)}
                          </p>
                        )}
                        <p>{user?.email}</p>
                      </div>
                      {profileOptionsShown ? (
                        <i className="ri-arrow-down-s-line"></i>
                      ) : (
                        <i className="ri-arrow-up-s-line"></i>
                      )}
                    </div>
                    {profileOptionsShown && (
                      <div className="shadow-2xl transition-all ease-in flex flex-col gap-2 mt-4 rounded-md py-2 w-full bg-white md:w-3/4 border-2 text-start md:text-center cursor-pointer border-gray-300 left-0 md:right-0 md:left-[unset] bottom-14 absolute">
                        <a href="" className="flex items-center gap-2 px-4">
                          <i className="ri-user-line"></i>
                          <span className="font-semibold text-black">
                            Profile
                          </span>
                        </a>

                        <p
                          onClick={(e) => {
                            e.preventDefault();
                            logOut();
                            setMenuShown((prevState: boolean) => !prevState);
                          }}
                          className="border-t mt-2 w-full flex gap-2 py-3 px-4 text-center cursor-pointer"
                        >
                          <i className="ri-logout-box-line"></i>
                          <span className="font-bold">SIGN OUT</span>
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            )}
          </div>
        </ul>
      </div>
      {/* <button className="hidden lg:flex ">
        <GetStartedBtn />
      </button> */}
      <div className="hidden xl:flex">
        {!user && (
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
        {/* {user && (
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
                src={user?.photoURL}
                alt="profile pic"
              />
              <p className="font-bold bg-[#14532D] py-2 px-4 text-white rounded-full">
                {user?.displayName.slice(0, 1) || user?.email.slice(0, 1)}
              </p>
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
        )} */}
        {user && (
          <div className="flex flex-col xl:flex-row xl:relative items-left xl:items-center gap-4">
            <div
              className="px-[18px] py-[10px] w-fit border border-[#14532D] rounded-[50px]"
              onClick={(e: any) => {
                e.preventDefault();
                setMenuShown((prevState: boolean) => !prevState);
              }}
            >
              <Link href="/postBlog" className="text-[#14532D] font-semibold">
                Post a Blog
              </Link>
            </div>
            <section className="absolute bottom-4 left-8 xl:static xl:left-0 xl:bottom-0 z-50">
              <div className="relative w-full" id="profileInfoContainer">
                <div className="flex justify-between items-center cursor-pointer gap-4 px-3 py-2 border border-[#EAECF0] rounded-[50px]">
                  <div
                    className="flex items-center gap-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setProfileOptionsShown((prevState) => !prevState);
                    }}
                  >
                    {user?.photoURL ? (
                      <img
                        width={32}
                        height={32}
                        className="rounded-full"
                        src={user?.photoURL}
                        alt="profile pic"
                      />
                    ) : (
                      <p className="font-bold bg-[#14532D] py-2 px-4 text-white rounded-full">
                        {user?.displayName.slice(0, 1) ||
                          user?.email.slice(0, 1)}
                      </p>
                    )}
                    <p className="xl:hidden">{user?.email}</p>
                  </div>
                  <div className="xl:hidden">
                    {profileOptionsShown ? (
                      <i className="ri-arrow-down-s-line"></i>
                    ) : (
                      <i className="ri-arrow-up-s-line"></i>
                    )}
                  </div>
                </div>
                {profileOptionsShown && (
                  <div className="shadow-2xl transition-all ease-in flex flex-col gap-2 mt-4 rounded-md py-2 w-full bg-white md:w-3/4 border-2 text-start md:text-center cursor-pointer border-gray-300 left-0 md:right-0 md:left-[unset] bottom-14 absolute xl:bottom-0 xl:top-14 xl:right-0 xl:w-full xl:h-24">
                    <a href="" className="flex items-center gap-2 px-4">
                      <i className="ri-user-line"></i>
                      <span className="font-semibold text-black">Profile</span>
                    </a>

                    <p
                      onClick={(e) => {
                        e.preventDefault();
                        logOut();
                        setMenuShown((prevState: boolean) => !prevState);
                      }}
                      className="border-t mt-2 w-full flex gap-2 py-3 px-4 text-center cursor-pointer"
                    >
                      <i className="ri-logout-box-line"></i>
                      <span className="font-bold">SIGN OUT</span>
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </div>
      {/* hamburger */}
      <div
        onClick={toggleMenu}
        className={`z-[999999999999] grid justify-self-end justify-between flex-col xl:hidden gap-1.5 cursor-pointer ${
          menuShown
            ? "bg-white px-1.5 pt-5 py-4  rounded-full"
            : "bg-transparent"
        }`}
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
