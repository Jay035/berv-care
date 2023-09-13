import truncateMarkdown from "markdown-truncate";
import MarkdownIt from "markdown-it";
import { useAuth } from "@/context/Auth";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import img from "../../public/blog-1.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BlogPost({ post }: any) {
  const { router } = useAuth();
  const date = new Date(post?.date).toLocaleDateString();
  const md = useRef<any>();
  const [limit, setLimit] = useState(10);
  if (!post) console.log("no post");
  const navigateToPreview = (params: string) => {
    router.push(params);
  };

  // useEffect(() => {
  //   md.current = new MarkdownIt();
  // }, []);

  // const output =
  //   md.current &&
  //   md.current.render(truncateMarkdown(post?.content, { limit, ellipsis: true }));

  return (
    <section>
      <div className="text-left ">
        <Image className="w-full" src={img} alt="blog pics" />
        <p className="mt-4 text-sm text-[#6B7280]">Posted on {date} </p>
        <h1 className="mb-3 text-xl font-bold text-[#111827] tracking-tight">
          {post?.title}
        </h1>
        <div className="">
          {/* <div className="" dangerouslySetInnerHTML={{ __html: output }} /> */}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post?.content}
          </ReactMarkdown>
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
