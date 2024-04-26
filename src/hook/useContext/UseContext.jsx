import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
const TwitterProvider = new TwitterAuthProvider();
const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
const [loading,setLoading]=useState(true)
  /* =========== create a user ======================= */
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ===========LOGIN A USER============= */

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* login with GOGOGLE */
  const googleLogin = () => {
 setLoading(true)
    return signInWithPopup(auth, provider);
  };
  /* login with TWITTER ============*/
  /* ===========onAUTH STATE CHANGE======== */

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      /* user */
      if (currentUser) {
        setUser(currentUser);
        setLoading(false)
//console.log(currentUser);
        return () => {
          unsubscribe();
        };
      } else {
  setUser(null)

      }
    });
  }, []);


  /* ==========LOGOUT======= */
  const logOut=()=>{
    return signOut(auth)
  }
  /* all context data */
  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    googleLogin,
    logOut,
    login
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseContext;
