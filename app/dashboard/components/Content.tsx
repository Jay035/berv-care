"use client";
import BlogPost from "@/components/Blog/BlogPost";
import { BlogPostLoader } from "@/components/PostLoader";
import { useBlogContext } from "@/context/BlogContext";
import { useGlobalProvider } from "@/context/GlobalProvider";
import FetchUserBlogs from "@/lib/FetchUserData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Content({ data }: any) {
  const router = useRouter();
  const { user } = useGlobalProvider();
  const { error } = useBlogContext();

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day); // Month is zero-based in JS Date
  };
  const sortedData = data?.sort((a: any, b: any) => {
    const dateA = a.date && parseDate(a.date);
    const dateB = b.date && parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // const data = [
  //   {
  //     content:
  //       "Offer practical advice for maintaining heart health, including tips for managing blood pressure, cholesterol, and stress.",
  //     date: "08/08/2023",
  //     id: "XYCZ80FldDGAfN1xK5F6",
  //     title:
  //       'The ABCs of Heart Health: Simple Strategies for a Stronger Heart"',
  //     uid: "ZOYHixYD6UNAp2tBRtbWm1SFHFg2",
  //   },
  //   {
  //     content:
  //       "Offer practical advice for maintaining heart health, including tips for managing blood pressure, cholesterol, and stress.",
  //     date: "18/08/2024",
  //     id: "XYCZ80FldDGAfN1xK5F6",
  //     title:
  //       'The ABCs of Heart Health: Simple Strategies for a Stronger Heart"',
  //     uid: "ZOYHixYD6UNAp2tBRtbWm1SFHFg2",
  //   },
  //   {
  //     content:
  //       "Offer practical advice for maintaining heart health, including tips for managing blood pressure, cholesterol, and stress.",
  //     date: "28/08/2023",
  //     id: "XYCZ80FldDGAfN1xK5F6",
  //     title:
  //       'The ABCs of Heart Health: Simple Strategies for a Stronger Heart"',
  //     uid: "ZOYHixYD6UNAp2tBRtbWm1SFHFg2",
  //   },
  // ];

  // useEffect(() => {
  //   fetchUserBlogs()
  //     .then((data: any) => {
  //       console.log(blogData)
  //       if (data) {
  //         setUserBlogs(data);
  //       } else {
  //         setError(
  //           "No blog(s) found, Your voice matters—let it be heard and inspire others to live healthier, happier lives."
  //         );
  //       }
  //     })
  //     .catch((err) => {
  //       setError("Couldnt't fetch your blogs, check your internet connection");
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <main className="py-40 px-8 sm:px-[6vw]">
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">
        Welcome{" "}
        <span className="font-bold text-[#14532D]">
          {user?.displayName || user?.email}
        </span> 👋
      </h1>
      <section>
        <h2 className="text-2xl md:text-3xl font-medium underline">My Blogs</h2>
        {data?.length> 0 ? (
          sortedData && sortedData?.length > 0 ? (
            <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full mt-6">
              {sortedData?.map((blog: BlogData) => (
                <BlogPost post={blog} key={blog.title} />
              ))}
            </section>
          ) : (
            <BlogPostLoader />
            // <p className="text-2xl text-center mt-16">{error}</p>
          )
        ) : (
          <div className="flex flex-col gap-6 items-center text-center mx-auto max-w-3xl justify-center">
            <p className="text-lg md:text-2xl mt-16">Your voice matters—let it be heard and inspire others to live healthier, happier lives.</p>
            <Link
              href="/postBlog"
              className="px-[18px] py-[10px] w-fit border border-[#14532D] rounded-[50px]"
            >
              Post a Blog
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
