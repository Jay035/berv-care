"use client";
import EditorRenderer from "@/components/PostBlog/EditorRenderer";
import { OutputData } from "@editorjs/editorjs";
import dynamic from "next/dynamic";
import { useState } from "react";

const EditorBlock = dynamic(
  () => import("@/components/PostBlog/BlogPostEditor"),
  {
    ssr: false,
  }
);

export default function PostBlog() {
  const [data, setData] = useState<OutputData>();
  return (
    <main className="px-[9.5vw] mt-7 ">
      <h1 className="text-3xl font-bold">Tell your Story</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <section className="col-span-1">
          <h1 className="text-lg font-medium my-3">Editor</h1>
          <div className="border border-black rounded-md">
            <EditorBlock
              data={data}
              onChange={setData}
              holder="editorjs-container"
            />
          </div>
        </section>
        <section className="col-span-1 ">
          <h1 className="text-lg font-medium my-3">Preview</h1>
          <div className="border rounded-md">
            <div className="p-16">{data && <EditorRenderer data={data} />}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
