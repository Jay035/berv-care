// HOOKS 
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

// COMPONENTS 
import img from "../../public/blog-1.png";

export default function BlogPost({ post }: any) {
  const router = useRouter();
  const date = post?.date;

  const navigateTo = (params: string) => {
    router.push(params);
  };

  return (
    <article className="text-left flex flex-col justify-between">
      <Image placeholder="blur" className="w-full" src={img} alt="blog pics" />
      <p className="mt-4 text-sm text-[#6B7280]">Posted on {date} </p>

      <h1 className="mb-4 text-xl font-bold text-[#111827] tracking-tight">
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
      <Link
        href={`/blog/${post?.id}`}
        className="font-medium text-[#14532D] "
      >
        {" "}
        Read more...
      </Link>
    </article>
  );
}
