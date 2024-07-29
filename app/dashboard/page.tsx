"use client";

import { FetchUserBlogs } from "@/utils/FetchUserData";
import Content from "./components/Content";
import { useReroute } from "@/utils/useReroute";
import { useGlobalProvider } from "@/context/GlobalProvider";

export default async function Dashboard() {
  const blogs = FetchUserBlogs();
  const data = await blogs;
  

  return <Content data={data} />;
}
