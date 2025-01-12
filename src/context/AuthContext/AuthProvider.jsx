import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import axios from "axios";
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //generate token
  // const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{
  //   email: result?.user?.email,
  // })
  // console.log(data);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // setUser(currentUser);
      //   -----------------
      // setLoading(false);
      //   -----------------
      console.log("state captured", currentUser?.email);
      if (currentUser?.email) {
        setUser(currentUser);
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currentUser?.email
          },
          { withCredentials: true }
        );
        console.log(data);
      } else {
        setUser(currentUser);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          { withCredentials: true }
        )
        console.log(data);
      }
      setLoading(false);
      // if (currentUser?.email) {
      //   const user = { email: currentUser.email };
      //   axios.post("http://localhost:5000/jwt", user, {
      //     withCredentials: true
      //   })
      //     .then((res) => {
      //       console.log("login token", res.data);
      //       setLoading(false);
      //     });
      // } else {
      //     axios
      //       .post(
      //         "http://localhost:5000/logout",{},{withCredentials: true,}
      //       )
      //       .then((res) => {
      //         console.log("logout + ing", res.data);
      //         setLoading(false);
      //       });
      //   }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // signIn signOutUser
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUserProfile,
  };
  // signInWithGoogle, createUser, updateUserProfile, setUser
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
