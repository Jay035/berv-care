"use client";
import BlogPost from "@/components/Blog/BlogPost";
import { BlogPostLoader } from "@/components/PostLoader";
import { useBlogContext } from "@/context/BlogContext";
import { useGlobalProvider } from "@/context/GlobalProvider";
import fetchUserBlogs from "@/lib/FetchUserData";
import { useEffect, useState } from "react";

type Props = {
  content: string;
  date: string;
  title: string;
  uid: string;
};

export default function Content() {
  const { user } = useGlobalProvider();
  const { blogs, loading } = useBlogContext();
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    fetchUserBlogs().then((data: any) => {
      if (data) {
        console.log(data);
        setUserBlogs(data);
      } else {
        console.log("No data found for the current user.");
      }
    });
  }, [blogs]);
  return (
    <main className="pt-40 px-8 sm:px-[9.5vw]">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Welcome{" "}
        <span className="font-bold text-[#14532D]">
          {user?.displayName || user?.email}
        </span>
      </h1>
      <section>
        <h2 className="text-2xl md:text-3xl font-medium">My blogs</h2>
        {!loading ? (
          blogs.length > 0 ? (
            <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full mt-6">
              {userBlogs?.map((blog: Props) => (
                <BlogPost post={blog} key={blog.title} />
              ))}
            </section>
          ) : (
            <p className="text-2xl">
              You haven&apos;t posted any blog. Start blogging
            </p>
          )
        ) : (
          <BlogPostLoader />
        )}
        {/* <div className="">
          {userBlogs?.map((blog: Props) => (
            <BlogPost post={blog} key={blog.title} />
          ))}
        </div> */}
      </section>
    </main>
  );
}
