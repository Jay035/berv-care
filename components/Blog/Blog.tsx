"use client";
import Link from "next/link";
import { Suspense, lazy } from "react";
import { useBlogContext } from "@/context/BlogContext";
import PostLoader from "../PostLoader";

const BlogPost = lazy(() => import("./BlogPost"));

export default function Blog() {
  const { blogs } = useBlogContext();

  return (
    <section
      id="healthCenter"
      className="px-[9.5vw] pt-4 mb-[97px] text-center lg:text-left flex flex-col items-center lg:items-start"
    >
      <h3 className="text-[#14532D] font-semibold">OUR HEALTH CENTER</h3>
      <h1 className="text-[28px] md:text-[32px] w-full max-w-[515px] leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h1>
      {blogs.length > 0 ? (
        <section className="flex flex-col">
          <div className="grid gap-8 gap-y-10 md:grid-cols-2 mb-12 lg:grid-cols-3 w-full">
            {blogs?.map((post: any, index: number) => (
              <BlogPost post={post} key={index} />
            ))}
          </div>
          <Link
            href="/blog"
            className="rounded-[50px] mx-auto w-fit text-white bg-[#14532D] hover:bg-[#14532D]/70 py-4 sm:py-[18px] px-8 md:px-14"
          >
            Read all posts
          </Link>
        </section>
      ) : (
        <PostLoader />
      )}
    </section>
  );
}
