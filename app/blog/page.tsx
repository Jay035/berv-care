import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPost from "@/components/Blog/BlogPost";
import Link from "next/link";
type Props = {};

export default function Blog() {
  const blogs = getBlogs();
  return (
    <div
      id="healthCenter"
      className="px-[9.5vw] pt-4 mb-[97px] text-center lg:text-left flex flex-col items-center lg:items-start"
    >
      <h3 className="text-[#14532D] font-semibold">OUR HEALTH CENTER</h3>
      <h1 className="text-[28px] md:text-[32px] w-full max-w-[515px] leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h1>
      <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full ">
        {blogs.map((post, index) => (
          <BlogPost post={post} key={index} />
        ))}
      </section>
    </div>
  );
}

export const getBlogs = () => {
  //get files from blogs dir
  const files = fs.readdirSync(path.join("posts"));
  // get slug and frontmatter from blogs
  const blogs = files?.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");
    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return blogs;
};
