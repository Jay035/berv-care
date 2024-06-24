"use client";

import { fetchSingleBlog } from "@/lib/FetchUserData";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import Link from "next/link";
import path from "path";

type SingleBlogParams = {
  params: {
    id: string;
  };
};

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

export default async function BlogPreview({
  params: { id },
}: SingleBlogParams) {
  // const slug = props?.params?.slug;
  // const post = fetchBlogContent(slug);
  const blog = await fetchSingleBlog(id);

  // console.log(blog);

  return (
    <div className="">
      <main className="px-[9.5vw] py-40">
        <Link href="/blog" className="font-medium">Go back</Link>
        {/* <img className="w-full" src={post.data?.cover_image} alt="blog pics" /> */}
        <h1 className="text-4xl font-bold my-8 max-w-lg">{blog?.title}</h1>
        <p className="mt-4 text-sm text-[#6B7280]">Posted on {blog?.date} </p>
        <article className="prose lg:prose-xl">
          <Markdown remarkPlugins={[remarkGfm]}>{blog?.content}</Markdown>
        </article>
      </main>
    </div>
  );
}
