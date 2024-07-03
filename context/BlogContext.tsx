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

  const getMedicalBlogs = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=${process.env.NEXT_PUBLIC_NewsAPI_Key}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    //   let myHeaders = new Headers();
    //   myHeaders.append("Accept", "application/json");

    //   let requestOptions = {
    //     method: "GET",
    //     headers: myHeaders,
    //     redirect: "follow",
    //   };

    //   fetch("http://api.medical-blog.test/api/v1/posts", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
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
