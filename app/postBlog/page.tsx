"use client";
// import CustomInput from "@/components/CustomInput";
// import Editor from "@/components/PostBlog/BlogPostEditor";
// import EditorRenderer from "@/components/PostBlog/EditorRenderer";
import { db } from "@/config/Config";
// import { OutputData } from "@editorjs/editorjs";
import { addDoc, collection } from "@firebase/firestore";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import { toast } from "react-toastify";
// import Markdown from "markdown-to-jsx";
import { useAuth } from "@/context/Auth";
import { Metadata } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Form from "./Form";

const EditorBlock = dynamic(
  () => import("@/components/PostBlog/BlogPostEditor"),
  {
    ssr: false,
  }
);

// export const metadata: Metadata = {
//   title: `Berv-Care | Post Blog`,
// };

export default function PostBlog() {
  const router = useRouter();
  const { user } = useAuth();
  // const [data, setData] = useState<OutputData>();
  const [markdown, setMarkdown] = useState(
    ""
    // `A paragraph with *emphasis* and **strong importance**.`
  );
  const [title, setTitle] = useState("");
  const blogsRef = collection(db, "blogs");
  const datePosted = new Date().toLocaleDateString();
  console.log(datePosted);

  const publishBlog = async () => {
    try {
      console.log(`publishing blog....`);
      await addDoc(blogsRef, {
        date: datePosted,
        title: title,
        content: markdown,
      });
      console.log(datePosted, markdown, title);
      // toast.success("Congratulations, you have published your story");
      console.log("Congratulations, you have published your story");
      setTimeout(() => {
        router.push("/");
      }, 1000);
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
  }, []);

  return (
    <main className="px-[9.5vw] mt-7">
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
      <Form title={title} markdown={markdown} setTitle={setTitle} setMarkdown={setMarkdown} />
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
