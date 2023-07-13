"use client";
import { useAuth } from "@/context/Auth";
import Form from "./Form";

export default function SignUp() {
  const {
    register,
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
      <h1 className="text-2xl font-semibold">Create an account</h1>

      <Form
        loading={loading}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        register={register}
        signInWithGoogle={signInWithGoogle}
        error={error}
      />
    </main>
  );
}
