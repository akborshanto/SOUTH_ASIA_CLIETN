import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const provider=new GoogleAuthProvider()
const TwitterProvider=new TwitterAuthProvider()
const UseContext = ({ children }) => {
  /* =========== create a user ======================= */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* ===========LOGIN A USER============= */

const login=(email,password)=>{

return signInWithEmailAndPassword(auth,email,password)

}

/* login with GOGOGLE */
const googleLogin=()=>{
  return signInWithPopup(auth,provider)
}
/* login with TWITTER ============*/

  /* all context data */
  const authInfo = {
    createUser,
    googleLogin
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseContext;
