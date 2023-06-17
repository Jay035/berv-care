"use client";
import CustomInput from "@/components/CustomInput";
import { auth } from "@/components/config/Config";
import { GlobalAuth } from "@/context/Context";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const { signInWithGoogle }: FormProps = GlobalAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      router.push("/");
    } catch (err: any) {
      setLoading((prevState) => !prevState);
      console.log(err.code);
      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/network-request-failed":
          setError("Network request failed, check your network connection");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };
  return (
    <form className="flex flex-col gap-5" onSubmit={login}>
      {error && <p className="text-red-500 font-medium">{error}</p>}
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
        disabled={email === "" || password === ""}
        type="submit"
        className={` w-full font-medium mt-6 bg-[#14532D] disabled:bg-[#14532D]/50 hover:bg-[#14532D]/90 text-white px-4 py-2 rounded-lg`}
      >
        {loading ? "Logging in...." : "Login"}
      </button>

      <p className="opacity-90 text-center">Or</p>
    </form>
  );
}
