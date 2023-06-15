"use client";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";

type Props = {};

export default function Form({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={login}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="">
          Email
        </label>

        <CustomInput
          id="email"
          type="email"
          className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={email}
          name="email"
          placeholder=""
          onchange={(e: any) => {
            e.preventDefault();
            setEmail(e.target.value);
            console.log(email);
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="">
          Password
        </label>
        <CustomInput
          id="password"
          type="password"
          className="border outline-none text-white bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={email}
          name="password"
          placeholder=""
          onchange={(e: any) => {
            e.preventDefault();
            setPassword(e.target.value);
            console.log(password);
          }}
        />
      </div>

      <button
        disabled={email === "" || password === ""}
        type="submit"
        className="w-full font-medium mt-6 bg-[#14532D] disabled:bg-[#14532D]/50 hover:bg-[#14532D]/90 text-white px-4 py-2 rounded-lg"
      >
        Login
        {/* {loading ? "Logging in...." : "Login"} */}
      </button>

      <p className="opacity-90 text-center">Or</p>
    </form>
  );
}
