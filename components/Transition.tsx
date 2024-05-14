"use client";
import { Power3, gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export default function Transition() {
  let trans = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".first", {
        ease: Power3.easeInOut,
        duration: 2,
        skewY: 100,
        stagger: 0.25,
        opacity: 0,
        display: "none",
      });
    }, trans);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={trans} className="overflow-hidden w-fit">
      <div className="first absolute left-0 top-0 w-full h-screen z-[9999999999999] bg-[#14532dc9]"></div>
    </div>
  );
}

// gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo('.video-container',
// {
//   x: '0',
//   y: '0',
//   z: 0,
//   skewX: '0deg',
//   skewY: '8deg',
//   scaleX: 1,
//   scaleY: 1,
//   rotation: 0,
//   perspective: 0,
// },
// {
//   x: '12vw',
//   y: '4vw',
//   z: 0,
//   skewX: '0deg',
//   skewY: '0deg',
//   scaleX: 1.7,
//   scaleY: 1.7,
//   rotation: 0,
//   perspective: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.video-container',
//     start: 'top 50%',
//     end: 'top 20%',
//     scrub: true,
//     toggleActions: 'restart none none none',
//   },
// });
