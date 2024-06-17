"use client";
import { db } from "@/config/Config";
import { addDoc, collection } from "@firebase/firestore";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Metadata } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Form from "./Form";
import { toast } from "react-toastify";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useGlobalProvider } from "@/context/GlobalProvider";

export default function PostBlog() {
  const router = useRouter();
  const { user } = useGlobalProvider();
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const blogsRef = collection(db, "blogs");
  const datePosted = new Date().toLocaleDateString();

  const publishBlog = async () => {
    try {
      console.log(`publishing blog....`);
      await addDoc(blogsRef, {
        date: datePosted,
        title: title,
        content: markdown,
      });

      toast.success("Congratulations, you have published your story");

      setTimeout(() => {
        router.push("/blog");
      }, 600);
    } catch (err: any) {
      console.log(err.message);
      // toast.error(err.message);
    }
  };

  useEffect(() => {
    if (!user) {
      alert("You have to be signed in to post a blog");
      router.push("/login");
    }
    // else {
    //   router.push("/postBlog");
    // }
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <main className="px-[9.5vw] mt-7 h-full xl:min-h-[70vh]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Tell your Story</h1>
          <button
            disabled={title === "" || markdown === ""}
            onClick={publishBlog}
            className="bg-[#14532D] disabled:bg-[#14532D]/60 hidden lg:block text-xl px-4 py-2 text-white rounded-lg"
          >
            Publish
          </button>
        </div>
        <Form
          title={title}
          markdown={markdown}
          setTitle={setTitle}
          setMarkdown={setMarkdown}
        />
        <button
          disabled={title === "" || markdown === ""}
          onClick={publishBlog}
          className="bg-[#14532D] disabled:bg-[#14532D]/60 mt-8 lg:hidden text-lg px-5 py-2 text-white rounded-lg"
        >
          Publish
        </button>
      </main>
      <Footer />
    </>
  );
}
