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
  userData?: string;
  error?: string;
  setUserData?: () => void;
  setError?: (e: string) => void;
  setLoading?: (e: boolean) => void;
  loading: boolean;
}

export const BlogContext = createContext<BlogProps>({
  blogs: [""],
  loading: false,
});

type Props = {
  children: ReactNode;
};

export function BlogContextProvider({ children }: Props) {
  const [blogs, setBlogs]: any[] = useState([]);
  const [userData, setUserData]: any[] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const blogsCollectionRef = collection(db, "blogs");
  const [error, setError] = useState("");

  const getBlogs = async () => {
    setLoading(true);
    try {
      const data = await getDocs(blogsCollectionRef);
      const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(res);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const value = {
    blogs,
    loading,
    setLoading,
    userData,
    setUserData,
    error,
    setError,
  };

  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}

export const useBlogContext = () => useContext(BlogContext);
