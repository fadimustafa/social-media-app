import React, { createContext, useEffect, useState } from "react";
import useLocalstorge from "../hooks/useLocalstorge";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useLocalstorge("user", {});

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userAuth));
  }, [userAuth]);
  //JSON.parse(localStorage.removeItem("user"));
  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
