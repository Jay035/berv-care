"use client";
import { Power3, gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export default function Transition() {
  let trans = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".first", {
        delay: 0.2,
        top: "-100%",
        ease: Power3.easeInOut,
      });
      gsap.to(".second", {
        delay: 0.4,
        top: "-100%",
        ease: Power3.easeInOut,
      });
      gsap.to(".third", {
        delay: 0.6,
        top: "-100%",
        ease: Power3.easeInOut,
      });
      gsap.to(".fourth", {
        delay: 0.8,
        top: "-100%",
        ease: Power3.easeInOut,
      });
    }, trans);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={trans} className="overflow-hidden w-fit">
      <div className="first absolute left-0 top-0 w-1/4 h-full z-[100000] bg-[#14532dc9]"></div>
      <div className="second absolute left-[25%] top-0 w-1/4 h-full z-[100000] bg-[#14532dc9]"></div>
      <div className="third absolute left-[50%] top-0 w-1/4 h-full z-[100000] bg-[#14532dc9]"></div>
      <div className="fourth absolute left-[75%] top-0 w-1/4 h-full z-[100000] bg-[#14532dc9]"></div>
    </div>
  );
}
