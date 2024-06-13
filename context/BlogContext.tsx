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
  loading: false,
});

type Props = {
  children: ReactNode;
};

export function BlogContextProvider({ children }: Props) {
  const [blogs, setBlogs]: any[] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const blogsCollectionRef = collection(db, "blogs");

  const getBlogs = async () => {
    setLoading(true);
    try {
      const data = await getDocs(blogsCollectionRef);
      const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(res);
      setLoading(false);
      // console.log(res)
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
    // console.log(loading)
  };

  const getMedicalBlogs = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=f0e2512718a24d80b06d988e5000208e"
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
    // getMedicalBlogs()
    getBlogs();
  }, []);

  const value = {
    blogs,
    loading,
  };

  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}

export const useBlogContext = () => useContext(BlogContext);
