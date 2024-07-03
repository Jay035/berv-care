"use client";

// HOOKS
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/config/Config";
import { toast } from "react-toastify";

// COMPONENTS
import Form from "./Form";
import { useGlobalProvider } from "@/context/GlobalProvider";

export default function NewsLetter({ setSubscribeButtonClicked }: any) {
  const [email, setEmail] = useState("");
  const usersEmailRef = collection(db, "newsletter-subs");

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(usersEmailRef, { email: email });
      setSubscribeButtonClicked?.(true);
      setTimeout(() => {
        setSubscribeButtonClicked?.(false);
      }, 2000);
      setEmail("");
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <section className="px-8 sm:px-[6vw]">
      <div className="bg-[#DCFCE7] py-[78px] px-8 sm:px-[6vw] md:px-[6vw]">
        <h1 className="text-center font-bold text-4xl -tracking-[2%]">
          Beat the Queue, Stay Healthy!
        </h1>
        <p className="text-center text-[#374151] mt-3 mb-8 sm:text-lg">
          Be the first to receive our weekly newletter as soon as it drops
        </p>
        <Form
          email={email}
          handleEmailChange={handleEmailChange}
          handleSubscribe={handleSubscribe}
        />
      </div>
    </section>
  );
}
