// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_SYOTAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGGSENDERID,
  appId: import.meta.env.VITE_APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
