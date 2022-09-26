import firebase from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";

export const AuthService = {
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
      await firebase
        .auth()
        .sendPasswordResetPassword(email, { url: "https://kwaratechacademy.vercel.app/" });
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

export default AuthService;
