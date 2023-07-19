"use client";
import { useAuth } from "@/context/Auth";
import Form from "./Form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const {
    user
  } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
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
