import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Auth Provider/AuthProvider.jsx";

export const PrivateLoginRoute = ({ children }) => {
  const { userDetails } = useContext(authContext);
  if (!userDetails) {
    return children;
  }
  return <Navigate to={"/"} />;
};
