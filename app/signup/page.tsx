import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/components/config/Config";
import { useRouter } from "next/navigation";
import FormValidation from "@/components/FormValidation";

export default function SignUp() {

  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-[90vh]">
      <h1 className="text-2xl font-semibold">Create an account</h1>

      <Form />
      {/* <button
        onClick={signInWithGoogle}
        className="flex justify-center items-center gap-4 mt-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
      >
        <Image
          width={24}
          height={24}
          src="/google-icon.png"
          className="w-6 h-6"
          alt="google icon"
        />
        Sign Up With Google
      </button>
      <p className="text-center mt-10">
        Already have an account?{" "}
        <Link href="/login" className="underline font-bold">
          Log in
        </Link>
      </p> */}
    </main>
  );
}
