"use client";
import { auth, provider } from "@/config/Config";
import useGeoLocation from "@/hooks/useGeoLocationHook";
import { fetchNearbyPlaces } from "@/lib/getAllHospitals";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";

interface AuthContextType {
  children: GlobalProps[];
}

export const GlobalContext = createContext<GlobalProps>({
  user: "",
  name: "",
  error: "",
  isUserLoggedIn: false,
  loading: false,
  router: "",
});

type Props = {
  children: ReactNode;
};

export function GlobalProvider({ children }: Props) {
  const router = useRouter();
  const [userAddress, setUserAddress] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn]: any = useState(null);
  const [user, setUser]: any = useState(auth?.currentUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadCSVLink, setDownloadCSVLink] = useState("");

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      console.log("successfully signed in");
      console.log(auth.currentUser);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      router.push("/");
    } catch (err: any) {
      setLoading((prevState) => !prevState);
      setIsUserLoggedIn(false);
      console.log(err.code);
      switch (err.message) {
        case "auth/invalid-email":
          setError("Invalid email");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        case "auth/user-not-found":
          setError("No account with that email was found");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/network-request-failed":
          setError("Network request failed, check your network connection");
          break;
        default:
          setError("Incorrect email or password");
          break;
      }
    }
  };

  const logOut = async () => {
    await signOut(auth);
    setIsUserLoggedIn(false);
    setUser(null);
    router.push("/");
  };

  const signInWithGoogle = async () => {
    console.log("signing in with google....");
    try {
      await signInWithPopup(auth, provider);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      router.push("/");
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
      setIsUserLoggedIn(false);
    }
  };

  const register = async (email: string, password: string) => {
    // e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading((prevState) => !prevState);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      console.log("successfully registered");
      console.log(auth.currentUser);
      router.push("/");
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
      setLoading((prevState) => !prevState);
    }
  };

  const {
    location: { longitude, latitude },
  } = useGeoLocation();

const data  = fetchNearbyPlaces(latitude,longitude)
console.log(data)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        // console.log(user);
        setUser(user);
        setIsUserLoggedIn(true);
      } else {
        // User is not signed in.
        setIsUserLoggedIn(false);
      }
    });
    console.log(isUserLoggedIn);
  }, []);

  const value = {
    router,
    user,
    data,
    userAddress,
    // locationCoord,
    // setLocationCoord,
    setUserAddress,
    isUserLoggedIn,
    register,
    login,
    logOut,
    signInWithGoogle,
    error,
    loading,
    setLoading,
    setError,
    setUser,
    downloadCSVLink,
    setDownloadCSVLink,
  };

  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
}

export const useGlobalProvider = () => useContext(GlobalContext);
