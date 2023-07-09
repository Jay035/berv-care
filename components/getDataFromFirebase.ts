import { storage } from "@/config/Config";
import { ref } from "firebase/storage";

export const getDataFromFirebase = () => {
  // Create a storage reference from our storage service
  const storageRef = ref(storage);
  const imagesRef = ref(storage, "images");
};
