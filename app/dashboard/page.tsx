"use client";
import FetchUserBlogs from "@/lib/FetchUserData";
import Content from "./components/Content";

export default async function Dashboard() {
  const blogs = FetchUserBlogs();
  const data = await blogs;

  return <Content data={data} />;
}
