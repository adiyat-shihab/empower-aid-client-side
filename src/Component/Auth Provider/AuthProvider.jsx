import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase.config.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";
export const authContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const googleSign = () => {
    return signInWithPopup(auth, provider);
  };
  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const SignOut = () => {
    setLoading(true);
    return signOut(auth).then((res) =>
      Swal.fire("Sign Out Successful", "", "success"),
    );
  };
  const updateProfiles = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `${photo}`,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const user = currentUser?.email || userDetails?.email;
      const loggedUser = { email: user };
      setLoading(false);
      setUserDetails(currentUser);

      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_LOCAL_HOST}/jwt`, loggedUser, {
            withCredentials: true,
          })
          .then()
          .catch((err) => console.log(err));
      } else {
        axios
          .post(`${import.meta.env.VITE_LOCAL_HOST}/clear`, loggedUser, {
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
    <authContext.Provider
      value={{
        CreateUser,
        SignOut,
        SignIn,
        userDetails,
        updateProfiles,
        googleSign,
        loading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
