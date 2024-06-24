"use client";

import { useRouter } from "next/navigation";

type Props = {};

export function BackBtn({}: Props) {
  const router = useRouter();

  return (
    <i
      onClick={() => router.back()}
      className="ri-arrow-left-s-line text-3xl text-[#14532D] font-bold"
    ></i>
  );
}
