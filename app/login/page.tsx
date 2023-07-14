"use client"
import { useAuth } from "@/context/Auth";
import Form from "./Form";

export default function Login() {
  const {
    login,
    signInWithGoogle,
    error,
    email,
    password,
    setEmail,
    setPassword,
    loading,
  } = useAuth();
  return (
    <main className="container px-6 lg:px-14 max-w-lg mx-auto flex flex-col justify-center gap-3 w-full h-[90vh]">
      <div className="">
        <h1 className="text-2xl font-semibold">Welcome back 👋</h1>
        <p>Enter the information you entered while registering</p>
      </div>

      <div className="">
        <Form
          login={login}
          signInWithGoogle={signInWithGoogle}
          error={error}
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          loading={loading}
        />
      </div>
    </main>
  );
}
