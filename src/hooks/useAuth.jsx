import React, { useContext } from "react";
import AuthProvider from "../Provider/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthProvider);
  return auth;
};

export default useAuth;
