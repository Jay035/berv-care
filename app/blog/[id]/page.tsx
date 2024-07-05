"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// COMPONENTS
import { BackBtn } from "@/components/BackBtn";
import { FetchSingleBlog } from "@/utils/FetchUserData";

type SingleBlogParams = {
  params: {
    id: string;
  };
};

export default async function BlogPreview({
  params: { id },
}: SingleBlogParams) {
  const blog = await FetchSingleBlog(id);

  return (
    <div className="">
      <main className="px-8 sm:px-[6vw] py-40">
        <BackBtn />
        {/* <img className="w-full" src={post.data?.cover_image} alt="blog pics" /> */}
        <h1 className="text-[40px] leading-tight font-bold my-8 max-w-lg">
          {blog?.title}
        </h1>
        <p className="mt-4 text-[#6B7280]">Posted on {blog?.date} </p>
        <article className="prose lg:prose-xl">
          <Markdown remarkPlugins={[remarkGfm]}>{blog?.content}</Markdown>
        </article>
      </main>
    </div>
  );
}
