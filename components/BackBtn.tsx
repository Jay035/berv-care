"use client";

import { useRouter } from "next/navigation";

export function BackBtn() {
  const router = useRouter();

  return (
    <i
      onClick={() => router.back()}
      className="ri-arrow-left-s-line cursor-pointer text-3xl text-[#14532D] font-bold"
    ></i>
  );
}
