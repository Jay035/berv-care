"use client";
import Link from "next/link";
import { useGlobalProvider } from "@/context/GlobalProvider";
import { useReroute } from "@/utils/useReroute";

// COMPONENTS
import Form from "./Form";

export default function SignUp() {
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
      <h1 className="text-2xl font-semibold">Create an account</h1>

      <Form />
    </main>
  );
}
