"use client";
import { useBlogContext } from "@/context/BlogContext";
import { useGlobalProvider } from "@/context/GlobalProvider";
import fetchUserData from "@/lib/FetchUserData";
import { useEffect, useState } from "react";

type Props = {
    content: string;
    date: string;
title: string;
};

export default function Content() {
  const { user } = useGlobalProvider();
  const { blogs } = useBlogContext();
  const [userBlogs, setUserBlogs] = useState([])

  useEffect(() => {
    fetchUserData().then((data : Props) => {
      if (data) {
        console.log(data);
        setUserBlogs(data)
      } else {
        console.log('No data found for the current user.');
      }
    });
  }, [blogs]);
  return (
    <main className="pt-40 px-8 sm:px-[9.5vw]">
      <h1 className="text-3xl md:text-4xl font-semibold">Welcome <span className="font-bold text-[#14532D]">{user?.displayName || user?.email}</span></h1>
    <section>
        <h2>My blogs</h2>
    </section>
    </main>
  );
}
