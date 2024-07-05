"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// COMPONENTS
import Form from "./Form";
import { auth } from "@/config/Config";

export default function Login() {
  const router = useRouter();

  const reRoute = () => {
    if (auth?.currentUser) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", reRoute);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("DOMContentLoaded", reRoute);
    };
  }, []);

  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-screen">
      <Link
        href="/"
        className="w-fit mb-2 font-semibold text-[#14532D] flex items-center"
      >
        <i className="ri-arrow-drop-left-line text-2xl"></i> Back home
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
