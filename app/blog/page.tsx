"use client";
import { useBlogContext } from "@/context/BlogContext";
import { BlogPostLoader } from "@/components/PostLoader";
import dynamic from "next/dynamic";

const BlogPost = dynamic(() => import("@/components/Blog/BlogPost"));

export default function Blog() {
  const { blogs, loading } = useBlogContext();

  return (
    <main
      id="healthCenter"
      className="px-8 sm:px-[6vw] pt-40 pb-[97px] text-center flex flex-col items-center"
    >
      <h1 className="text-[#14532D] font-semibold lg:text-lg">
        OUR HEALTH CENTER
      </h1>
      <h2 className="text-[28px] md:text-[32px] w-full lg:text-5xl max-w-screen-md leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h2>
      {!loading ? (
        blogs.length > 0 ? (
          <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full ">
            {blogs?.map((post: any, index: number) => (
              <BlogPost post={post} key={index} />
            ))}
          </section>
        ) : (
          <p className="text-2xl">
            No blogs at the moment...Kindly check back later
          </p>
        )
      ) : (
        <BlogPostLoader />
      )}
    </main>
  );
}
