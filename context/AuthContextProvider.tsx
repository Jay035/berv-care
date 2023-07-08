// import { auth, provider } from "@/config/Config";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import {
//   ReactNode,
//   useState,
//   useContext,
//   useEffect,
//   createContext,
// } from "react";
// import { AuthContext } from "./Auth";

// interface Props {
//   children: ReactNode;
// }

// export default function AuthContextProvider({ children }: Props) {
//   const router = useRouter();
//   const [isUserLoggedIn, setIsUserLoggedIn]: any = useState(null);
//   const [user, setUser] : any = useState("");
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const login = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       setLoading((prevState) => !prevState);
//       console.log("successfully signed in");
//       console.log(auth.currentUser);
//       setIsUserLoggedIn(true);
//       setUser(auth?.currentUser);
//       router.push("/");
//     } catch (err: any) {
//       setLoading((prevState) => !prevState);
//       setIsUserLoggedIn(false);
//       console.log(err.code);
//       switch (err.code) {
//         case "auth/invalid-email":
//           setError("Invalid email");
//           break;
//         case "auth/user-not-found":
//           setError("No account with that email was found");
//           break;
//         case "auth/wrong-password":
//           setError("Incorrect password");
//           break;
//         case "auth/network-request-failed":
//           setError("Network request failed, check your network connection");
//           break;
//         default:
//           setError("Incorrect email or password");
//           break;
//       }
//     }
//   };

//   const logOut = async () => {
//     await signOut(auth);
//     setIsUserLoggedIn(false);
//     router.push("/");
//   };

//   const signInWithGoogle = async () => {
//     console.log("signing in with google....");
//     try {
//       await signInWithPopup(auth, provider);
//       setIsUserLoggedIn(true);
//       setUser(auth?.currentUser);
//       router.push("/");
//     } catch (err: any) {
//       console.log(err.message);
//       setError(err.message);
//       setIsUserLoggedIn(false);
//     }
//   };

//   const register = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       setLoading((prevState) => !prevState);
//       setIsUserLoggedIn(true);
//       setUser(auth?.currentUser);
//       console.log("successfully registered");
//       console.log(auth.currentUser);
//       router.push("/");
//     } catch (err: any) {
//       setError(err.message);
//       setLoading((prevState) => !prevState);
//     }
//   };

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in.
//       console.log(user);
//       setUser(user);
//       setIsUserLoggedIn(true);
//     } else {
//       // User is not signed in.
//       setIsUserLoggedIn(false);
//     }
//   });

//   useEffect(() => {
//     console.log(isUserLoggedIn);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isUserLoggedIn,
//         register,
//         login,
//         logOut,
//         signInWithGoogle,
//         error,
//         name,
//         email,
//         password,
//         setName,
//         setEmail,
//         setPassword,
//         loading,
//       }}
//     ></AuthContext.Provider>
//   );
// }
