"use client";
import { useGSAP } from "@gsap/react";
import { Power3, gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useEffect } from "react";

export default function Transition() {
  let trans = useRef(null);

  useGSAP(() => {
    gsap.to(".intro", {
      ease: Power3.easeInOut,
      x: "-100vw",
      duration: 0.7,
      stagger: 0.25,
      // skewX: 0,
      // opacity: 0,
      // display: "none",
    });
  });

  // stop page scrolling while animation is in play
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 800);
  }, []);
  return (
    <div
      ref={trans}
      id="intro"
      className="intro absolute left-0 top-0 w-full h-full z-[999999999999999999999999] bg-[#14532dfa]"
    ></div>
  );
}
