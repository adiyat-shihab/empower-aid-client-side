import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase.config.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const SignOut = () => {
    return signOut(auth).then((res) =>
      Swal.fire("Sign Out Successful", "", "success"),
    );
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const user = currentUser?.email || userDetails?.email;
      const loggedUser = { email: user };
      setUserDetails(currentUser);
      console.log(user);
      if (currentUser) {
        axios
          .post("https://course-roter-backend.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      } else {
        axios
          .post("https://course-roter-backend.vercel.app/clear", loggedUser, {
            withCredentials: true,
          })
          .then((r) => console.log(r))
          .catch((err) => console.log(err));
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <authContext.Provider value={{ CreateUser, SignOut, SignIn, userDetails }}>
      {children}
    </authContext.Provider>
  );
};
