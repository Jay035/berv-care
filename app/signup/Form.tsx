// HOOKS
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// COMPONENTS
import CustomInput from "@/components/CustomInput";
import { auth } from "@/config/Config";
import { useGlobalProvider } from "@/context/GlobalProvider";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Form() {
  const router = useRouter();
  const { signInWithGoogle } = useGlobalProvider();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const register = async (e: any) => {
    e.preventDefault();
    setLoading?.(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading?.((prevState: boolean) => !prevState);
      console.log("successfully registered");
      router.push("/");
    } catch (err: any) {
      console.error(err.message);
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already in use");
          break;
        case "auth/weak-password":
          setError("Weak pasword. Password should be at least 6 characters");
          break;
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/network-request-failed":
          setError("Network request failed, check your network connection");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
      // setError?.(err.message);
      setLoading?.((prevState: boolean) => !prevState);
    }
  };

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
          style="flex flex-col gap-2 relative"
          label="password"
          id="password"
          type={showPassword ? "text" : "password"}
          className="border outline-none text-black bg-white/10 border-[#7a7c86] rounded-lg px-2 py-1"
          value={password}
          name="password"
          placeholder=""
          onChange={(e) => setPassword?.(e.target.value)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
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
