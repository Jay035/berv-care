import { useAuth } from "@/context/Auth";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

// type Props = {
//   slug: string;
//   frontmatter: {
//     title: string;
//     description: string;
//     date: string;
//     excerpt: string;
//   };
// };

export default function BlogPost({ post }: any) {
  const { router } = useAuth();
  const date = new Date(post?.date).toLocaleDateString();
  // console.log(date);
  if (!post) console.log("no post");
  const navigateToPreview = (params: string) => {
    router.push(params);
  };
  return (
    <section>
      <div className="text-left">
        <img
          className="w-full"
          src="/blog-1.png"
          // src={post.frontmatter?.cover_image}
          alt="blog pics"
        />
        <p className="mt-4 text-sm text-[#6B7280]">Posted on {date} </p>
        <h1 className=" mb-3 text-xl font-bold text-[#111827] tracking-tight">
          {post?.title}
        </h1>
        <p className="text-[#6B7280]">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            transformImageUri={(uri) =>
              uri.startsWith("http")
                ? uri
                : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${uri}`
            }
          >
            {post?.content}
          </ReactMarkdown>
        </p>
        <button
          className="bg-[#14532D] text-white rounded-lg mt-3 px-4 py-3"
          onClick={() => navigateToPreview(`/blog/${post?.id}`)}
        >
          {/* <Link href={`/blog/${post?.id}`} className=""> */}
          Read more
          {/* </Link> */}
        </button>
      </div>
    </section>
  );
}
