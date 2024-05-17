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
        x:"-100vw",
        duration: .6,
        // skewY: 100,
        stagger: 0.25,
        // opacity: 0,
        // display: "none",
        
      });
  });

  // stop page scrolling while animation is in play 
  useEffect(() => {
    document.body.style.overflow = "hidden"
    setTimeout(() => {
      document.body.style.overflow = "unset"
    }, 1300);
  }, [])
  return (
      <div ref={trans} id="intro" className="intro absolute left-0 top-0 w-full h-screen z-[9999999999999] bg-[#14532dc9]"></div>
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
