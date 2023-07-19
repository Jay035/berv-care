// "use client"
import CustomInput from "@/components/CustomInput";
import { useAuth } from "@/context/Auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Form() {
  const {
    register,
    signInWithGoogle,
    error,
    // email,
    // password,
    // setEmail,
    // setPassword,
    loading,
  } = useAuth();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="">
      <form
        className="flex flex-col gap-5"
        id="signup-form"
        onSubmit={register}
      >
        {error && <p className="text-red-500 font-bold">{error}</p>}
        {/* <div className="flex flex-col gap-2">
          <label htmlFor="name" className="">
            Name
          </label>

          <CustomInput
            id="name"
            type="text"
            className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
            value={name}
            name="name"
            placeholder=""
            onchange={(e: any) => {
              e.preventDefault();
              setName?.(e.target.value);
              console.log(name);
            }}
          />
        </div> */}

        <CustomInput
          style="flex flex-col gap-2"
          label="email"
          id="email"
          type="email"
          className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={email}
          name="email"
          placeholder=""
          onChange={(e) => setEmail?.(e.target.value)}
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
          onChange={(e) => setPassword?.(e.target.value)}
        />
        <button
          disabled={email === "" || password === ""}
          type="submit"
          className={` w-full mt-6 bg-[#14532D] disabled:bg-[#14532D]/50 hover:bg-[#14532D]/90 text-white px-4 py-2 rounded-lg`}
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        <p className="opacity-90 text-center font-medium">Or</p>
      </form>
      <button
        onClick={signInWithGoogle}
        className="w-full flex justify-center items-center gap-4 mt-4 border border-gray-500 py-2 font-medium rounded-lg hover:border-2"
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
      </p>
    </div>
  );
}
