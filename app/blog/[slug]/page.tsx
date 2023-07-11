import fs from "fs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import getBlogs from "@/components/getBlogs";
import getHospital from "@/lib/getHospital";

type Props = {};

// const fetchBlogContent = (slug: string) => {
//   const folder = "posts/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf-8");
//   const matterResult = matter(content);
//   return matterResult;
// };

// export const generateStaticParams = async () => {
//   const blogs = getBlogs();

//   return blogs?.map((post) => ({
//     slug: post.slug,
//   }));
// };

export default function BlogPreview({ params }: { params: { slug: string } }) {
  // const slug = props?.params?.slug;
  // const post = fetchBlogContent(slug);
  console.log(params)

  return (
    <main className="px-[9.5vw]">
      <Link href="/blog">Go back</Link>
      {params.slug}
      {/* <img className="w-full" src={post.data?.cover_image} alt="blog pics" />
      <h1>{post?.data?.title}</h1>
      <p className="mt-4 text-sm text-[#6B7280]">
        Posted on {post?.data.date}{" "}
      </p>
      <article className="prose lg:prose-xl">
        <Markdown>{post?.content}</Markdown>
      </article> */}
    </main>
  );
}
