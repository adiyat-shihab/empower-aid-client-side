import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Auth Provider/AuthProvider.jsx";

export const PrivateRoute = ({ children }) => {
  const { userDetails, loading } = useContext(authContext);

  if (loading) {
    return;
  }
  if (userDetails) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
