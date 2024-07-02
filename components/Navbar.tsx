"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { sora } from "../utils/fonts";
import { useGlobalProvider } from "@/context/GlobalProvider";

export const Navbar = () => {
  const { user, logOut }: any = useGlobalProvider();
  const optionsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const [profileMenuShown, setProfileMenuShown] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuShown((prevValue) => !prevValue);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setProfileMenuShown(false);
      console.log(profileMenuShown);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("click", handleOutsideClick);
  //   return () => {
  //     window.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`${sora.className} ${
        scrolled ? "bg-white/90 backdrop-blur-[2px]" : "bg-white"
      } fixed top-0 left-0 z-50 flex justify-between items-center w-full py-7 px-8 sm:px-[6vw]`}
    >
      <Link href="/">
        <Image
          className="w-7"
          src="/logo.svg"
          width="0"
          height="0"
          alt="logo"
        />
      </Link>
      {/* menu */}
      <div
        className={`${
          menuShown
            ? ` top-0 left-0 w-full h-screen bg-[#6B7280]/40 xl:bg-transparent backdrop-blur-sm xl:backdrop-blur-0 xl:h-fit xl:w-fit transition-all `
            : `-left-full xl:left-0 w-fit`
        } fixed items-center z-30 sm:text-lg text-[#6B7280] xl:relative overflow-x-hidden`}
      >
        <section
          className={` ${
            menuShown && "w-[80%]"
          } whitespace-nowrap bg-white xl:bg-transparent h-screen xl:h-fit xl:w-fit flex flex-col xl:flex-row xl:justify-between gap-8 px-8 sm:px-[6vw] pt-40 xl:pt-0`}
        >
          <Link
            href="/#about_us"
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
            className="after:bg-[#14532D] after:h-0.5 after:block after:w-0 after:hover:w-full ease-in after:transition-all w-fit"
          >
            About us
          </Link>

          <Link
            href="/#howItWorks"
            className="after:bg-[#14532D] after:h-0.5 after:block after:w-0 after:hover:w-full ease-in after:transition-all w-fit"
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            How It Works
          </Link>

          <Link
            href="/blog"
            className="after:bg-[#14532D] after:h-0.5 after:block after:w-0 after:hover:w-full ease-in after:transition-all w-fit"
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            Health Center
          </Link>

          <Link
            href="/hospitals"
            className="after:bg-[#14532D] after:h-0.5 after:block after:w-0 after:hover:w-full ease-in after:transition-all w-fit"
            onClick={() => {
              setMenuShown((prevState: boolean) => !prevState);
            }}
          >
            Find Hospitals
          </Link>

          {!user && (
            <span
              onClick={(e: any) => {
                alert("You must be logged in to post a blog");
                router.push("/login");
                setMenuShown((prevState: boolean) => !prevState);
              }}
              className="cursor-pointer transition w-fit"
            >
              Post a blog
            </span>
          )}

          {/* BUTTONS FOR MOBILE */}
          <div className="xl:hidden w-fit list-none">
            {!user ? (
              <div className="flex text-center flex-col text-lg gap-4 w-fit sm:flex-row sm:w-full">
                <Link
                  href="/login"
                  onClick={(e: any) => {
                    setMenuShown((prevState: boolean) => !prevState);
                  }}
                  className="py-2 w-36 text-[#14532D] border border-[#14532D] bg-white rounded-[50px]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={(e: any) => {
                    setMenuShown((prevState: boolean) => !prevState);
                  }}
                  className="py-2 w-36 bg-[#14532D] border border-[#14532D] text-white rounded-[50px] hover:bg-[#14532D]/80"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-left gap-4">
                <Link
                  href="/postBlog"
                  className="px-[18px] py-[10px] text-[#14532D] font-semibold w-fit border border-[#14532D] rounded-[50px]"
                  onClick={(e: any) => {
                    setMenuShown((prevState: boolean) => !prevState);
                  }}
                >
                  Post a Blog
                </Link>
                <section
                  className="absolute w-40 bottom-4 left-8 sm:left-16"
                  ref={optionsRef}
                >
                  <div className="relative w-full">
                    <div
                      onClick={(e) => {
                        setProfileMenuShown((prevState) => !prevState);
                      }}
                      className="flex justify-between items-center cursor-pointer gap-2 px-3 py-2 border border-[#EAECF0] rounded-[50px]"
                    >
                      <div className="flex items-center gap-2 w-full">
                        {user?.photoURL ? (
                          <Image
                            width={28}
                            height={28}
                            className="rounded-full"
                            src={user?.photoURL}
                            alt="profile pic"
                          />
                        ) : (
                          <p className="font-bold bg-[#14532D] py-2 px-4 text-white rounded-full">
                            {(user?.displayName &&
                              user?.displayName.slice(0, 1)) ||
                              user?.email.slice(0, 1)}
                          </p>
                        )}
                        <p className="truncate">{user?.displayName}</p>
                      </div>
                      {profileMenuShown ? (
                        <i className="ri-arrow-down-s-line"></i>
                      ) : (
                        <i className="ri-arrow-up-s-line"></i>
                      )}
                    </div>
                    {profileMenuShown && (
                      <div className="shadow-2xl text-xs transition-all ease-in flex flex-col gap-2 mt-4 rounded-md py-1 w-full bg-white md:w-3/4 border-2 text-start md:text-center cursor-pointer border-gray-300 hover:bg-white/80 left-0 md:right-0 md:left-[unset] bottom-14 absolute">
                        <Link
                          href="/dashboard"
                          onClick={() => {
                            setMenuShown((prevState: boolean) => !prevState);
                            setProfileMenuShown((prevState) => !prevState);
                          }}
                          className="flex items-center gap-2 px-4 border-b font-medium py-2 text-black"
                        >
                          My Dashboard
                        </Link>

                        <p
                          onClick={(e) => {
                            logOut();
                            setTimeout(() => {
                              setMenuShown((prevState: boolean) => !prevState);
                            }, 500);
                          }}
                          // border-t
                          className=" w-full flex gap-2 py-[6px] font-medium px-4 text-center cursor-pointer"
                        >
                          <i className="ri-logout-box-line"></i>
                          <span className="">SIGN OUT</span>
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            )}
          </div>
          {/* ----------------------------------- */}
        </section>
      </div>

      {/* BUTTONS FOR LARGER SCREENS */}
      <div className="hidden xl:flex text-center whitespace-nowrap">
        {!user ? (
          <div className="flex gap-4 items-center">
            <Link
              href="/login"
              className="cursor-pointer py-3 w-32 text-lg bg-transparent text-[#14532D] rounded-[50px] transition hover:text-black border border-black"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="cursor-pointer py-3 w-32 text-lg border border-[#14532D] bg-[#14532D] text-white rounded-[50px] transition hover:text-black hover:bg-white hover:border hover:border-black"
            >
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row xl:relative items-left xl:items-center gap-4">
            <Link
              href="/postBlog"
              className="px-[18px] py-[10px] w-fit border border-[#14532D] rounded-[50px]"
              onClick={(e: any) => {
                setMenuShown((prevState: boolean) => !prevState);
              }}
            >
              Post a Blog
            </Link>
            <section
              className="absolute bottom-4 left-8 xl:static xl:left-0 xl:bottom-0 z-50"
              ref={optionsRef}
            >
              <div className="relative w-full" id="profileInfoContainer">
                <div
                  onClick={(e) => {
                    setProfileMenuShown((prevState) => !prevState);
                  }}
                  className="flex justify-between items-center cursor-pointer gap-4 px-3 py-2 border border-[#EAECF0] rounded-[50px]"
                >
                  <div className="flex items-center gap-4">
                    {user?.photoURL ? (
                      <Image
                        width={32}
                        height={32}
                        className="rounded-full"
                        src={user?.photoURL}
                        alt="profile pic"
                      />
                    ) : (
                      <p className="font-bold bg-[#14532D] py-2 px-4 text-white rounded-full">
                        {(user?.displayName && user?.displayName.slice(0, 1)) ||
                          user?.email.slice(0, 1)}
                      </p>
                    )}
                    {/* <p className="xl:hidden">{user?.email}</p> */}
                  </div>
                  {/* <div className="xl:hidden">
                    {profileMenuShown ? (
                      <i className="ri-arrow-down-s-line"></i>
                    ) : (
                      <i className="ri-arrow-up-s-line"></i>
                    )}
                  </div> */}
                </div>
                {profileMenuShown && (
                  <div className="shadow-2xl transition-all ease-in flex flex-col gap-2 mt-4 rounded-md py-1 w-full bg-white md:w-3/4 border-2 text-start md:text-center cursor-pointer border-gray-300 left-0 md:right-0 md:left-[unset] bottom-14 absolute xl:bottom-0 xl:top-14 xl:right-0 xl:w-full xl:h-fit">
                    <Link
                      href="/dashboard"
                      onClick={() => {
                        setProfileMenuShown((prevState) => !prevState);
                        // setMenuShown((prevState: boolean) => !prevState);
                      }}
                      className="flex items-center gap-2 px-4 py-1 border-b font-medium text-black"
                    >
                      My Dashboard
                    </Link>

                    <p
                      onClick={(e) => {
                        e.preventDefault();
                        logOut();
                        // setTimeout(() => {
                        //   setMenuShown((prevState: boolean) => !prevState);
                        // }, 500);
                      }}
                      // border-t
                      className=" w-full flex gap-2 font-medium py-1 px-4 text-center cursor-pointer"
                    >
                      <i className="ri-logout-box-line"></i>
                      <span className="">Sign Out</span>
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
            ? "bg-white fixed right-8 sm:right-16 px-1.5 pt-5 py-4 rounded-full"
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
