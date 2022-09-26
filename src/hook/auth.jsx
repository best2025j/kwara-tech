import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../config/firebase-config";
import { useState } from "react";
import { useRouter } from "next/router";
import AuthService from "../service/AuthService";

export const AuthProvider = (props) => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter;

  createUserWithEmailAndPassword = async (email, password) => {
    if (email && password) {
      const { user, error } = await AuthService.createUserWithEmailAndPassword(
        email,
        password
      );

      if (error) {
        setError(error);
        return;
      }
      setUser(user ?? null);
      router.push(`/verify?email=${email}`);
    } else {
      setError("Email and Password can not be empty.");
    }
  };

  const value = {
    user,
    error,
    setUser,
    createUserWithEmailAndPassword,
  };

  return <AuthProvider.Provider value={value} />;
};


//   signInWithEmailAndPassword = async (email, password) => {
//     try {
//       const useCred = await firebaseApp
//         .auth()
//         .signInWithEmailAndPassword(email, password);
//       await useCred.user.sendEmailVerification({
//         // domain url
//         url: "",
//       });
//       return {
//         user: useCred.user,
//       };
//     } catch (e) {
//       return {
//         error: e.massage,
//       };
//     }
//   };
