"use client";

// HOOKS
import {
  ReactNode,
  useState,
  useContext,
  useEffect,
  createContext,
} from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

// COMPONENTS
import { auth, provider } from "@/config/Config";

export const GlobalContext = createContext<GlobalProps>({
  user: {
    displayName: "",
    email: "",
  },
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
  const [error, setError] = useState("");

  // DOWNLOAD COMPONENT
  const [downloadCSVLink, setDownloadCSVLink] = useState("");
  const [downloadButtonClicked, setDownloadButtonClicked] = useState(false);
  const [subscribeButtonClicked, setSubscribeButtonClicked] = useState(false);

  // MODAL
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalHeader, setModalHeader] = useState<string>("");

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  // MAP
  const [userAddress, setUserAddress] = useState("");
  const [selectedHospitalInfo, setSelectedHospitalInfo] = useState<MarkerType>(
    {} as MarkerType
  );
  const [nearbyHospitals, setNearbyHospitals] = useState<MarkerType[]>();
  const [destinationHospital, setDestinationHospital] =
    useState<LatLngLiteral>();
  const [directions, setDirections] = useState<DirectionsResult>();

  // AUTHENTCATION
  const [isUserLoggedIn, setIsUserLoggedIn]: any = useState(false);
  const [user, setUser]: any = useState(auth?.currentUser);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    console.log("signing in with google....");
    try {
      await signInWithPopup(auth, provider);
      setIsUserLoggedIn(true);
      setUser(auth?.currentUser);
      router.push("/dashboard");
    } catch (err: any) {
      console.log(err.message);
      setError(err.message);
      setIsUserLoggedIn(false);
    }
  };

  //  user logout
  const logOut = async () => {
    await signOut(auth);
    setIsUserLoggedIn(false);
    setUser(null);
    router.push("/");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        setUser(user);
        setIsUserLoggedIn(true);
      } else {
        // User is not signed in.
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  const value = {
    router,
    user,
    userAddress,
    setUserAddress,
    isUserLoggedIn,
    logOut,
    signInWithGoogle,
    error,
    loading,
    setLoading,
    setError,
    setUser,
    downloadCSVLink,
    setDownloadCSVLink,
    downloadButtonClicked,
    setDownloadButtonClicked,
    subscribeButtonClicked, setSubscribeButtonClicked,

    // MAP props
    selectedHospitalInfo,
    setSelectedHospitalInfo,
    toggleModal,
    showModal,
    modalHeader,
    setModalHeader,
    setShowModal,
    destinationHospital,
    setDestinationHospital,
    directions,
    setDirections,
    nearbyHospitals,
    setNearbyHospitals,
  };

  return (
    <>
      <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    </>
  );
}

export const useGlobalProvider = () => useContext(GlobalContext);
