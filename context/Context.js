"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider, db } from "@/config/Config";

const FormContext = createContext();

export function ContextProvider({ children }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const register = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("successfully registered");
      console.log(auth.currentUser);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      router.push("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      router.push("/");
    } catch (err) {
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
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        password,
        error,
        setName,
        setEmail,
        setPassword,
        logIn,
        register,
        signInWithGoogle,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function GlobalAuth() {
  return useContext(FormContext);
}
