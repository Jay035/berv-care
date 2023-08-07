"use client"
import { Power3, gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export default function Transition() {
  let trans = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.to(".first", {
      delay: .2,
      top: "-100%",
      ease: Power3.easeInOut,
    });
    gsap.to(".second", {
      delay: .4,
      top: "-100%",
      ease: Power3.easeInOut,
    });
    gsap.to(".third", {
      delay: .6,
      top: "-100%",
      ease: Power3.easeInOut,
    });
    gsap.to(".fourth", {
      delay: .8,
      top: "-100%",
      ease: Power3.easeInOut,
    });
    gsap.to(".fifth", {
      delay: 1,
      top: "-100%",
      ease: Power3.easeInOut,
    });
    }, trans);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={trans} className="">
      <div className="transition first absolute left-0 top-0 w-full h-full z-[10000000000000000000000000000000000000] bg-[#14532dc9]"></div>
      <div className="transition second absolute left-[20%] top-0 w-full h-full z-[10000000000000000000000000000000000000] bg-[#14532dc9]"></div>
      <div className="transition third absolute left-[40%] top-0 w-full h-full z-[10000000000000000000000000000000000000] bg-[#14532dc9]"></div>
      <div className="transition fourth absolute left-[60%] top-0 w-full h-full z-[10000000000000000000000000000000000000] bg-[#14532dc9]"></div>
      <div className="transition fifth absolute left-[80%] top-0 w-full h-full z-[10000000000000000000000000000000000000] bg-[#14532dc9]"></div>
    </div>
  );
}
