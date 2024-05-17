"use client";
import Link from "next/link";
import { Suspense, lazy } from "react";
import { useBlogContext } from "@/context/BlogContext";
import PostLoader from "../PostLoader";

const BlogPost = lazy(() => import("./BlogPost"));

export default function Blog() {
  const { blogs, loading } = useBlogContext();

  return (
    <section
      id="healthCenter"
      className="px-[9.5vw] pt-4 mb-[97px] text-center lg:text-left flex flex-col items-center lg:items-start"
    >
      <h1 className="text-[#14532D] font-semibold">OUR HEALTH CENTER</h1>
      <h2 className="text-[28px] md:text-[32px] w-full max-w-[515px] leading-10 mt-3 mb-[47px] font-bold tracking-tight">
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
          <PostLoader />
        )}
    </section>
  );
}
