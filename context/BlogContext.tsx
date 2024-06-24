"use client";
import { auth, db } from "@/config/Config";
import { collection, getDocs, query, where } from "@firebase/firestore";
// import { ref } from "firebase/storage";

import { ref, child, get } from 'firebase/database';
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
  setUserData?: () => void;
  loading: boolean;
  fetchUserData?: () => void;
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

  const getBlogs = async () => {
    setLoading(true);
    try {
      const data = await getDocs(blogsCollectionRef);
      const res = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogs(res);
      setLoading(false);
      // console.log(data)
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
    // console.log(loading)
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
    // getMedicalBlogs()
    getBlogs();
    // fetchUserData();
  }, []);

  const value = {
    blogs,
    loading,
    userData,
    setUserData,
    // fetchUserData,
  };

  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  );
}

export const useBlogContext = () => useContext(BlogContext);
