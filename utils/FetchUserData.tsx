import { auth, db } from "@/config/Config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useBlogContext } from "@/context/BlogContext";


export async function FetchUserBlogs() {
  const {setError, setLoading} = useBlogContext()
  const user = auth.currentUser;

  if (user) {
    const userUid = user.uid;
    const userCollection = collection(db, "blogs");
    const q = query(userCollection, where("uid", "==", userUid));

    // setLoading?.(true)
    try {
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // setLoading?.(false)
      if(!userData) setError?.("Your voice matters—let it be heard and inspire others to live healthier, happier lives.")
      return userData;
    } catch (error : any) {
      console.error("Error fetching user data:", error);
      setError?.(error.message);
      // setLoading?.(false)
    }
  } 
  // else {
  //   console.log("No user is currently logged in.");
  // }
}


export async function FetchSingleBlog(id: string) {
  const {setError} = useBlogContext()
  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    const docFile = { id: docSnap.id, ...docSnap.data() } as BlogData;
    if (docSnap.exists()) {
      return docFile
    } else {
      console.log("No such document!");
    }
  } catch (error : any) {
    console.error("Error fetching user data:", error);
    setError?.(error.message);
  }
}
