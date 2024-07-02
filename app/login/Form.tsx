import CustomInput from "@/components/CustomInput";
import { auth } from "@/config/Config";
import { useGlobalProvider } from "@/context/GlobalProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  const router = useRouter();
  const { signInWithGoogle } = useGlobalProvider();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const login = async (e: any) => {
    // console.log(process.env.NEXT_PUBLIC_storageBucket);
    e.preventDefault();
    console.log("logging in....");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      // setIsUserLoggedIn(true);
      // setUser(auth?.currentUser);
      router.push("/");
    } catch (err: any) {
      setLoading((prevState) => !prevState);
      // setIsUserLoggedIn(false);
      console.log(err.code);
      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        // case "auth/user-not-found":
        //   setError("No account with that email was found");
        //   break;
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
  // console.log(email);
  return (
    <div className="">
      <form className="flex flex-col gap-5" id="login-form" onSubmit={login}>
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
          style="flex flex-col gap-2 relative"
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
          showPassword={showPassword}
            setShowPassword={setShowPassword}
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
