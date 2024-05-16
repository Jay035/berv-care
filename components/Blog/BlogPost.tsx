import truncateMarkdown from "markdown-truncate";
import MarkdownIt from "markdown-it";
import { useAuth } from "@/context/Auth";
import { ReactMarkdown } from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import img from "../../public/blog-1.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BlogPost({ post }: any) {
  const { router } = useAuth();
  const date = new Date(post?.date).toLocaleDateString();

  if (!post) console.log("no post");
  const navigateToPreview = (params: string) => {
    router.push(params);
  };

  // truncateMarkdown("markdown *is* __properly__ truncated", {
  //   limit: 15,
  //   ellipsis: true,
  // });
  return (
    <section>
      <div className="text-left ">
        <Image
          placeholder="blur"
          className="w-full"
          src={img}
          alt="blog pics"
        />
        <p className="mt-4 text-sm text-[#6B7280]">Posted on {date} </p>
        <h1 className="mb-3 text-xl font-bold text-[#111827] tracking-tight">
          {post?.title}
        </h1>
        <div className="h-full prose max-h-6 overflow-hidden">
          {/* <div className="" dangerouslySetInnerHTML={{ __html: output }} /> */}
          <Markdown remarkPlugins={[remarkGfm]}>{post?.content}</Markdown>...
        </div>
        <button
          disabled
          className="bg-[#14532D] disabled:bg-[#14532D]/60 text-white rounded-lg mt-3 px-4 py-3"
          // onClick={() => navigateToPreview(`/blog/${post?.id}`)}
        >
          {/* <Link href={`/blog/${post?.id}`} className=""> */}
          Read more
          {/* </Link> */}
        </button>
      </div>
    </section>
  );
}
