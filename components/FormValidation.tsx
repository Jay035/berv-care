// import { useState } from 'react';

// type Props = {}

// export default function FormValidation({}: Props) {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const Register = async (e : any) => {
//         setLoading(true);
//         try {
//           const res = await createUserWithEmailAndPassword(auth, email, password);
//           console.log(res, email, password);
//           console.log(auth.currentUser);
//           // setLoading(false);
//         //   navigate("/");
//         } catch (err) {
//           console.log(err.message);
//           setError(err.message);
//           setLoading(false);
//         }
//       };
    
//       const signInWithGoogle = async () => {
//         try {
//           const res = await signInWithPopup(auth, provider);
//           console.log(res);
//           navigate("/");
//         } catch (err) {
//           console.log(err.message);
//           setLoading(false);
//         }
//       };
    
//       const logIn = async (e) => {
//         setLoading(true);
//         try {
//           await signInWithEmailAndPassword(auth, email, password);
//           console.log("successfully signed in");
//           console.log(auth.currentUser);
//           navigate("/");
//         } catch (err) {
//           console.log(err.code);
//           setLoading(fasle);
//           switch (err.code) {
//             case "auth/invalid-email":
//               setError("Invalid email");
//               break;
//             case "auth/user-not-found":
//               setError("No account with that email was found");
//               break;
//             case "auth/wrong-password":
//               setError("Incorrect password");
//               break;
//             case "auth/popup-closed-by-user":
//               setError("Popup closed-by-user");
//               break;
//             default:
//               setError("Incorrect email or password");
//               break;
//           }
//         }
//       };
    
//       const logOut = async () => {
//         await signOut(auth);
//         navigate("/");
//       };
    
  
//   return (
//     <div>FormValidation</div>
//   )
// }