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
  loading: boolean;
}

export const BlogContext = createContext<BlogProps>({
  blogs: [""],
  loading: false
});

type Props = {
  children: ReactNode;
};

export function BlogContextProvider({ children }: Props) {
  const [blogs, setBlogs]: any[] = useState([]);
  const [loading, setLoading] = useState<boolean>(false)
  const blogsCollectionRef = collection(db, "blogs");

  const getBlogs = async () => {
    setLoading(true)
    try {
      const data = await getDocs(blogsCollectionRef);
      const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(res);
      setLoading(false)
      console.log(res)
    } catch (err: any) {
      console.log(err.message);
      setLoading(false)
    }
    console.log(loading)
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const value = {
    blogs,
    loading
  };

  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}

export const useBlogContext = () => useContext(BlogContext);
