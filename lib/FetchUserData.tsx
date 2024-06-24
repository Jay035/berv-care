import { auth, db } from "@/config/Config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

async function fetchUserBlogs() {
  const user = auth.currentUser;

  if (user) {
    const userUid = user.uid;
    const userCollection = collection(db, "blogs");
    const q = query(userCollection, where("uid", "==", userUid));

    try {
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs.map((doc) => doc.data());
      console.log("User Data:", userData);
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  } else {
    console.log("No user is currently logged in.");
  }
}

export default fetchUserBlogs;

export async function fetchSingleBlog(id: string) {
  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    // const userData = querySnapshot.docs.map(doc => doc.data());
    // console.log('User Data:', userData);
    // return userData;
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as BlogData;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
