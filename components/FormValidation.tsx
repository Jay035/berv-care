"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/Config";
import { useRouter } from "next/navigation";

export default function FormValidation() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      router.push("/");
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return { signInWithGoogle };
}
