import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "@/config/Config";

// type Props = {
//   setBlogs: (x: any) => void;
// };

export default function getBlogs() {
  // //get files from blogs dir
  const files = fs.readdirSync(path.join("posts"));
  // get slug and frontmatter from blogs
  const blogs = files?.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");
    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  return blogs;
  // const blogsCollectionRef = collection(db, "blogs");
  // // const getBlogs = async () => {
  // const data = await getDocs(blogsCollectionRef);
  // const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
  // setBlogs(res);
  // };
  // };
  // getBlogs();
  // }, []);
}
