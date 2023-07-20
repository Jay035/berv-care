"use client";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/Config";

export default function SignUp() {
  const router = useRouter();

  useEffect(() => {
    console.log(auth?.currentUser)
    if (auth?.currentUser) {
      router.push("/");
    }
  }, []);
  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-[90vh]">
      <h1 className="text-2xl font-semibold">Create an account</h1>

      <Form />
    </main>
  );
}
