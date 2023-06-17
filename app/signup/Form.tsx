"use client";
import CustomInput from "@/components/CustomInput";
import { auth } from "@/config/Config";
import { GlobalAuth } from "@/context/Context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  // const {
  //   // name,
  //   // email,
  //   // password,
  //   // setName,
  //   // setEmail,
  //   // setPassword,
  //   // register,
  //   signInWithGoogle,
  // }: FormProps = GlobalAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const register = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      console.log("successfully registered");
      console.log(auth.currentUser);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
      setLoading((prevState) => !prevState);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={register}>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      <div className="flex flex-col gap-2">
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
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="">
          Email
        </label>

        <CustomInput
          id="email"
          type="email"
          className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={email}
          name="email"
          placeholder=""
          onchange={(e: any) => {
            e.preventDefault();
            setEmail?.(e.target.value);
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
          className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={password}
          name="password"
          placeholder=""
          onchange={(e: any) => {
            e.preventDefault();
            setPassword?.(e.target.value);
            console.log(password);
          }}
        />
      </div>
      <button
        disabled={name === "" || email === "" || password === ""}
        type="submit"
        className={` w-full mt-6 bg-[#14532D] disabled:bg-[#14532D]/50 hover:bg-[#14532D]/90 text-white px-4 py-2 rounded-lg`}
      >
        {loading ? "Creating account..." : "Create account"}
      </button>

      <p className="opacity-90 text-center font-medium">Or</p>
    </form>
  );
}