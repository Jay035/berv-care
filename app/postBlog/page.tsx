"use client";
import CustomInput from "@/components/CustomInput";
import Editor from "@/components/PostBlog/BlogPostEditor";
import EditorRenderer from "@/components/PostBlog/EditorRenderer";
import { db } from "@/config/Config";
import { OutputData } from "@editorjs/editorjs";
import { addDoc, collection } from "@firebase/firestore";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "react-toastify";
import Markdown from "markdown-to-jsx";
import { useAuth } from "@/context/Auth";
import { Metadata } from "next";

const EditorBlock = dynamic(
  () => import("@/components/PostBlog/BlogPostEditor"),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: `Berv-Care | Post Blog`,
};

export default function PostBlog() {
  const router = useRouter();
  const {user} = useAuth()
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
      toast.success("Congratulations, you have published your story");
      console.log("Congratulations, you have published your story");
      setTimeout(() => {
        router.push("/blog");
      }, 1000);
    } catch (err: any) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
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
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="col-span-1">
          <CustomInput
            type="text"
            label="title"
            // dataTestId="blog-title"
            className="w-full mt-3 text-black border border-black py-2 md:py-4 px-4 rounded-lg"
            value={title}
            name="blog-title"
            onChange={(e: any) => setTitle(e.target.value)}
            placeholder=""
          />

          <div className="">
            <h1 className="text-lg font-medium my-3">Content</h1>
            {/* <div className="border border-black rounded-md">
            <EditorBlock
              data={data}
              onChange={setData}
              holder="editorjs-container"
              />
            </div> */}
            <div>
              <textarea
                autoFocus={true}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                rows={10}
                cols={50}
                className="p-2 w-full rounded-lg border border-black"
                placeholder="Write your content in Markdown here..."
              />
            </div>
          </div>
        </section>
        <section className="col-span-1 ">
          <h1 className="text-lg font-medium mb-3">Preview</h1>
          <div className="border rounded-lg p-4">
            <h1 className="text-2xl mb-2 font-bold">{title && title}</h1>
            <div className="">
              {markdown && (
                // <ReactMarkdown
                //   remarkPlugins={[remarkGfm]}
                //   transformImageUri={(uri) =>
                //     uri.startsWith("http")
                //       ? uri
                //       : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${uri}`
                //   }
                // >
                <Markdown>{markdown}</Markdown>
              )}
              {/* </ReactMarkdown> */}
            </div>
          </div>
        </section>
      </div>
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
