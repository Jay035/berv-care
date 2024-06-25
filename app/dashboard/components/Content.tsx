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
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserBlogs()
      .then((data: any) => {
        if (data) {
          setUserBlogs(data);
        } else {
          setError("No blog(s) found, Your voice matters—let it be heard and inspire others to live healthier, happier lives.");
        }
      })
      .catch((err) => {
        setError("Couldnt't fetch your blogs, check your internet connection");
        console.log(err.message);
      });
  }, [blogs]);
  return (
    <main className="py-40 px-8 sm:px-[9.5vw]">
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">
        Welcome{" "}
        <span className="font-bold text-[#14532D]">
          {user?.displayName || user?.email}
        </span>
      </h1>
      <section>
        <h2 className="text-2xl md:text-3xl font-medium">Blogs</h2>
        {!loading ? (
          blogs.length > 0 ? (
            <section className="grid gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full mt-6">
              {userBlogs?.map((blog: Props) => (
                <BlogPost post={blog} key={blog.title} />
              ))}
            </section>
          ) : (
            <p className="text-2xl text-center mt-16">
              {error}
            </p>
          )
        ) : (
          <BlogPostLoader />
        )}
      </section>
    </main>
  );
}
