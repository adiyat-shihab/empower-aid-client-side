import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../Auth Provider/AuthProvider.jsx";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
