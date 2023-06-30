import Link from "next/link";

type Props = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    excerpt: string;
  };
};

export default function BlogPost({ post }: any) {
  console.log(post);
  return (
    <div className="text-left">
      <img
        className="w-full"
        src={post.frontmatter?.cover_image}
        alt="blog pics"
      />
      <p className="mt-4 text-sm text-[#6B7280]">
        Posted on {post?.frontmatter.date}{" "}
      </p>
      <h1 className=" mb-3 text-xl font-bold text-[#111827] tracking-tight">
        {post?.frontmatter?.title}
      </h1>
      <p className="text-[#6B7280]">{post?.frontmatter?.description}</p>
      <button className="bg-[#14532D] text-white rounded-lg mt-3 px-4 py-3">
        <Link href={`/blog/${post?.slug}`}>Read more</Link>
      </button>
    </div>
  );
}
