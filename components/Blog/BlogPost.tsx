import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import img from "../../public/blog-1.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogPost({ post }: any) {
  const router = useRouter();
  const date = post?.date;

  const navigateTo = (params: string) => {
    router.push(params);
  };

  return (
    <article className="text-left">
      <Image placeholder="blur" className="w-full" src={img} alt="blog pics" />
      <p className="mt-4 text-sm text-[#6B7280]">Posted on {date} </p>
      <h1 className="mb-3 text-xl font-bold text-[#111827] tracking-tight">
        {post?.title}
      </h1>
      {/* <div className="h-full prose prose-slate prose-a:text-[#DD2D4A] max-h-6 overflow-hidden">
        <Markdown remarkPlugins={[remarkGfm]}>
          {
            post?.content
            // .slice(0, 50)
          }
        </Markdown>
      </div> */}
      <button
        // disabled
        className="bg-[#14532D] disabled:bg-[#14532D]/60 text-white rounded-lg mt-3 px-4 py-3"
        onClick={() => navigateTo(`/blog/${post?.id}`)}
      >
        {" "}
        Read more
      </button>
    </article>
  );
}
