// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVHTzGfPOl-PBLj9gvy3alVcSMfZyYzb4",
  authDomain: "south-asia-3915c.firebaseapp.com",
  projectId: "south-asia-3915c",
  storageBucket: "south-asia-3915c.appspot.com",
  messagingSenderId: "448660167874",
  appId: "1:448660167874:web:9b1f73377054f86d932f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
