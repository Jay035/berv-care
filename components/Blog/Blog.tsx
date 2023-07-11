"use client";

import Link from "next/link";
import { Suspense, lazy } from "react";
import { useBlogContext } from "@/context/BlogContext";

const BlogPost = lazy(() => import("./BlogPost"));

export default function Blog() {
  const { blogs } = useBlogContext();
  // const blogs = getBlogs();
  // const [blogs, setBlogs]: any[] = useState([]);
  // const blogsCollectionRef = collection(db, "blogs");

  // useEffect(() => {
  //   const getBlogs = async () => {
  //     try {
  //       const data = await getDocs(blogsCollectionRef);
  //       const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
  //       setBlogs(res);
  //     } catch (err: any) {
  //       console.log(err.message);
  //     }
  //   };

  //   getBlogs();
  // }, []);
  return (
    <section
      id="healthCenter"
      className="px-[9.5vw] pt-4 mb-[97px] text-center lg:text-left flex flex-col items-center lg:items-start"
    >
      <h3 className="text-[#14532D] font-semibold">OUR HEALTH CENTER</h3>
      <h1 className="text-[28px] md:text-[32px] w-full max-w-[515px] leading-10 mt-3 mb-[47px] font-bold tracking-tight">
        Read our latest medical and lifestyle articles
      </h1>
      <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full ">
        <Suspense fallback={<p className="font-bold text-2xl text-center">Loading....</p>}>
          {blogs?.map((post: any, index: number) => (
            <BlogPost post={post} key={index} />
          ))}
        </Suspense>
      </section>
      <Link
        href="/blog"
        className="rounded-[50px] mx-auto w-fit text-white mt-12 bg-[#14532D] py-4 sm:py-[18px] px-8 md:px-14"
      >
        Read all posts
      </Link>
    </section>
  );
}
