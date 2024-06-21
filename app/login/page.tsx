"use client";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalProvider } from "@/context/GlobalProvider";
import Link from "next/link";

export default function Login() {
  const { user } = useGlobalProvider();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);
  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-screen">
     <Link
        href="/"
        className="w-fit mb-2 font-semibold text-[#14532D] flex items-center"
      >
        <i className="ri-arrow-drop-left-line text-2xl"></i>{" "}Back home
      </Link>
      <div className="">
        <h1 className="text-2xl font-semibold">Welcome back 👋</h1>
        <p>Enter the information you entered while registering</p>
      </div>

      <div className="">
        <Form />
      </div>
    </main>
  );
}
