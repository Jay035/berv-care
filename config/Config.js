import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { useRouter } from "next/navigation";
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  // databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
// const storage = firebase.storage()
const storage = getStorage(app);
const storageRef = ref(storage);

// initialize firebase auth
const auth = getAuth();

const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, provider, db, storage, storageRef };
