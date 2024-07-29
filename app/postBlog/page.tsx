"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGlobalProvider } from "@/context/GlobalProvider";
import { useReroute } from "@/utils/useReroute";
import { auth, db } from "@/config/Config";
import { addDoc, collection } from "@firebase/firestore";

// COMPONENTS
import Form from "./Form";

function generateRandomId() {
  return Math.random().toString(36).substr(2, 12);
}

export default function PostBlog() {
  const router = useRouter();
  const { isUserLoggedIn } = useGlobalProvider();
  const [blogPublished, setBlogPublished] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const blogId = generateRandomId();
  const blogsRef = collection(db, "blogs");
  const datePosted = new Date().toLocaleDateString();

  const publishBlog = async () => {
    console.log(blogId);

    try {
      console.log(`publishing blog....`);
      await addDoc(blogsRef, {
        date: datePosted,
        title: title,
        content: markdown,
        blogid: blogId,
        uid: auth?.currentUser?.uid,
      });
      setBlogPublished(true);
      // re-route to blog page
      setTimeout(() => {
        setBlogPublished(false);
        router.push("/blog");
      }, 1000);
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
    }
  };

  useReroute("/login", !isUserLoggedIn!);

  return (
    <main className="px-8 sm:px-[6vw] pt-40 h-full xl:min-h-[70vh]">
      {blogPublished && (
        <div className="fixed z-[99999999999999999] border shadow-lg text-lg sm:text-xl flex gap-4 top-0 right-0 bg-white px-2 py-4 w-full max-w-md h-fit">
          {" "}
          <i className="ri-checkbox-circle-line text-xl text-green-500"></i>
          Congratulations, you have published your story
        </div>
      )}
      {error && (
        <div className="fixed z-[99999999999999999] border shadow-lg text-lg sm:text-xl flex gap-4 top-0 right-0 bg-white px-2 py-4 w-full max-w-md h-fit">
          {" "}
          <i className="ri-checkbox-circle-line text-xl text-green-500"></i>
          {error}
        </div>
      )}
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
  );
}
