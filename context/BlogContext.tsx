"use client";
import { db } from "@/config/Config";
import { collection, getDocs } from "@firebase/firestore";
import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";

interface BlogProps {
  blogs: any[];
}

export const BlogContext = createContext<BlogProps>({
  blogs: [""],
});

type Props = {
  children: ReactNode;
};

export function BlogAuthProvider({ children }: Props) {
  const [blogs, setBlogs]: any[] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");

  const getBlogs = async () => {
    try {
      const data = await getDocs(blogsCollectionRef);
      const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(res);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const value = {
    blogs,
  };

  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}

export const useBlogContext = () => useContext(BlogContext);
