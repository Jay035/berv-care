"use client";
import { useState } from "react";
import Form from "./Form";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/config/Config";
import { toast } from "react-toastify";

type Props = {};

export default function NewsLetter({}: Props) {
  const [email, setEmail] = useState("");
  const usersEmailRef = collection(db, "newsletter-subs");

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    try {
      console.log(`Subscribing ${email} to our newsletter...`);
      await addDoc(usersEmailRef, { email: email });
      toast.success("Congratulations, you have subscribed to our newsletter");
      console.log("Congratulations, you have subscribed to our newsletter");
      setEmail("");
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <section className="md:px-[9.5vw]">
      <div className="bg-[#DCFCE7] py-[78px] px-[9.5vw] md:px-[6vw]">
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
