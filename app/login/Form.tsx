import CustomInput from "@/components/CustomInput";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Form({
  login,
  signInWithGoogle,
  error,
  loading,
}: FormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // console.log(email);
  return (
    <div className="">
      <form
        className="flex flex-col gap-5"
        id="login-form"
        onSubmit={(e: any) => {
          // e.preventDefault();
          console.log(email, password)
          login?.(email, password);
        }}
      >
        {error && <p className="text-red-500 font-medium">{error}</p>}

        <CustomInput
          style="flex flex-col gap-2"
          label="email"
          id="email"
          type="email"
          className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={email}
          name="email"
          placeholder=""
          onChange={(e) => {
            setEmail?.(e.target?.value);
            console.log(email);
          }}
        />
        <CustomInput
          style="flex flex-col gap-2"
          label="password"
          id="password"
          type="password"
          className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={password}
          name="password"
          placeholder=""
          onChange={(e) => {
            setPassword?.(e.target?.value);
            console.log(email);
          }}
        />

        <button
          disabled={email === "" || password === ""}
          type="submit"
          className={` w-full font-medium mt-6 bg-[#14532D] disabled:bg-[#14532D]/50 hover:bg-[#14532D]/90 text-white px-4 py-2 rounded-lg`}
        >
          {loading ? "Logging in...." : "Login"}
        </button>

        <p className="opacity-90 text-center">Or</p>
      </form>

      <button
        onClick={signInWithGoogle}
        className="w-full flex justify-center items-center mt-4 gap-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
      >
        <Image
          width={24}
          height={24}
          src="/google-icon.png"
          className="w-6 h-6"
          alt="google icon"
        />
        Login with Google
      </button>

      <p className="text-center mt-10">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline font-bold">
          Sign up
        </Link>
      </p>
    </div>
  );
}
