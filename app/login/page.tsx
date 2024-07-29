"use client";
import Link from "next/link";
import { useReroute } from "@/utils/useReroute";
import { useGlobalProvider } from "@/context/GlobalProvider";

// COMPONENTS
import Form from "./Form";

export default function Login() {
  const { isUserLoggedIn } = useGlobalProvider();

  useReroute("/dashboard", isUserLoggedIn!);

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
