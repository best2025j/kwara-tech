import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../firebase-config";

const UserContext = createContext();

export const AuthContextPovider = ({ children }) => {
  // createUser
  const createUser = (email, password) => {
    return;
    createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <UserContext.Povider value={createUser}>{children}</UserContext.Povider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
