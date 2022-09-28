import firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = {
  // create user with email and password
  createUserWithEmailAndPassword: async (email, password) => {
    try {
      const useCred = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await useCred.user.sendEmailVerification({
        // domain url
        url: "",
      });
      return {
        user: useCred.user,
      };
    } catch (e) {
      return {
        error: e.massage,
      };
    }
  },

  // sign in user with email and passsword
  signInWithEmailAndPassword: async (email, password) => {
    try {
      const useCred = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      return {
        user: useCred.user,
      };
    } catch (e) {
      return {
        error: e.massage,
      };
    }
  },

  // reset password with eamil
  sendPasswordResetPassword: async (email) => {
    try {
      await firebase.auth().sendPasswordResetPassword(email, {
        url: "https://kwaratechacademy.vercel.app/",
      });
    } catch (e) {
      return {
        error: e.massage,
      };
    }
  },

  // deleting account
  deleteUser: async () => {
    try {
      await firebase.auth().currentUser.delete();
    } catch (e) {
      return {
        error: e.massage,
      };
    }
  },

  // update password
  updatePassword: async (newPassword) => {
    try {
      await firebase.auth().currentUser.updatePassword(newPassword);
      return "update successfull done";
    } catch (e) {
      return {
        error: e.massage,
      };
    }
  },
};

export default auth;

// import {
//   createUserWithEmailAndPassword,
//   getAuth,
// } from "firebase/auth";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import AuthService from "../service/AuthService";

// export const AuthProvider = (props) => {
//   const [user, setUser] = useState(false);
//   const [error, setError] = useState(false);
//   const router = useRouter;

//   // create accout with email and password
//   const auth = getAuth();
//   createUserWithEmailAndPassword = async (email, password, auth) => {
//     if (email && password) {
//       const { user, error } = await AuthService.createUserWithEmailAndPassword(
//         email,
//         password
//       );

//       if (error) {
//         setError(error);
//         return;
//       }
//       setUser(user ?? null);
//       router.push(`/verify?email=${email}`);
//     } else {
//       setError("Email and Password can not be empty.");
//     }
//   };

//   return <AuthProvider.Provider value={value} />;
// };

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

// const value = {
//   user,
//   error,
//   setUser,
//   createUserWithEmailAndPassword,
// };

// signin with email and password
// signInWithEmailAndPassword = async(email, password, auth)
//   // signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
