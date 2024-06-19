import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import img from "../../public/blog-1.png";
import Image from "next/image";
import { useGlobalProvider } from "@/context/GlobalProvider";

export default function BlogPost({ post }: any) {
  const { router } = useGlobalProvider();
  const date = new Date(post?.date).toLocaleDateString();

  if (!post) console.log("no post");
  const navigateToPreview = (params: string) => {
    router.push(params);
  };

  return (
      <article className="text-left">
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
        <div className="h-full prose prose-slate prose-a:text-[#DD2D4A] max-h-6 overflow-hidden">
          <Markdown remarkPlugins={[remarkGfm]}>{post?.content
          // .slice(0, 50)
          }</Markdown>
        </div>
        {/* <button
          disabled
          className="bg-[#14532D] disabled:bg-[#14532D]/60 text-white rounded-lg mt-3 px-4 py-3"
          // onClick={() => navigateToPreview(`/blog/${post?.id}`)}
        > */}
          {/* <Link href={`/blog/${post?.id}`} className=""> */}
          {/* Read more */}
          {/* </Link> */}
        {/* </button> */}
      </article>
  );
}
