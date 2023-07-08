import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/config/Config";
import { useRouter } from "next/navigation";
import FormValidation from "@/components/FormValidation";

export default function SignUp() {

  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-[90vh]">
      <h1 className="text-2xl font-semibold">Create an account</h1>

      <Form />
    </main>
  );
}
