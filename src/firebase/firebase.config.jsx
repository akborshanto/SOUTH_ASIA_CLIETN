// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API,
  authDomain: import.meta.env.AUTH_DOMIN,
  projectId: import.meta.env.PROJECTID,
  storageBucket: import.meta.env.BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDERID,
  appId: import.meta.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
