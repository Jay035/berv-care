"use client";
import Form from "./Form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/Config";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      if (auth?.currentUser) {
        router.push("/dashboard");
      }
    });
  }, []);

  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-screen">
      <Link
        href="/"
        className="w-fit mb-2 font-semibold text-[#14532D] flex items-center"
      >
        <i className="ri-arrow-drop-left-line text-2xl"></i> Back home
      </Link>
      <h1 className="text-2xl font-semibold">Create an account</h1>

      <Form />
    </main>
  );
}
