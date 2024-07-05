"use client";

// HOOKS
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/config/Config";

// COMPONENTS
import Form from "./Form";
import { Toast } from "../Toast";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [subscriptionSuccessful, setSubscriptionSuccessful] =
    useState<boolean>(false);
  const usersEmailRef = collection(db, "newsletter-subs");

  const handleEmailChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handleSubscribe = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(usersEmailRef, { email: email });
      setShowModal?.(true);
      setSubscriptionSuccessful(true);
      setTimeout(() => {
        setShowModal?.(false);
      }, 4000);
      setEmail("");
    } catch (err: any) {
      setSubscriptionSuccessful(false);
      setError(err.message);
      setTimeout(() => {
        setShowModal?.(false);
        setError("");
      }, 4000);
    }
  };

  return (
    <section className="px-8 sm:px-[6vw]">
      {/* MODAL  */}
      <Toast showModal={showModal} setShowModal={setShowModal}>
        <div className="flex items-center gap-2">
          <i
            className={`${
              subscriptionSuccessful && !error
                ? "ri-checkbox-circle-line text-green-500"
                : "ri-error-warning-fill text-red-500"
            } text-xl`}
          ></i>
          {subscriptionSuccessful && !error ? (
            <span>Congratulations, you have subscribed to our newsletter</span>
          ) : (
            <span>{error}</span>
          )}
        </div>
      </Toast>

      {/* ---------------------------  */}

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
