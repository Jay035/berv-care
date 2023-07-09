"use client";

// import BlogPost from "@/components/Blog/BlogPost";
import { Suspense } from "react";
import { sortByDate } from "@/utils/index";
import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/config/Config";
import getBlogs from "@/components/getBlogs";
import dynamic from "next/dynamic";

const BlogPost = dynamic(() => import("@/components/Blog/BlogPost"));

export default function Blog() {
  // const blogs = getBlogs();
  const [blogs, setBlogs]: any[] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);
        const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogs(res);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    getBlogs();
  }, []);
  return (
    <div
      id="healthCenter"
      className="px-[9.5vw] mt-10 mb-[97px] text-center flex flex-col items-center"
    >
      <h3 className="text-[#14532D] font-semibold lg:text-lg">
        OUR HEALTH CENTER
      </h3>
      <h1 className="text-[28px] md:text-[32px] w-full lg:text-5xl max-w-screen-md leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h1>
      <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full ">
        <Suspense fallback={<p>Loading....</p>}>
          {blogs?.map((post: any, index: number) => (
            <BlogPost post={post} key={index} />
          ))}
        </Suspense>
      </section>
    </div>
  );
}
