
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfJhM7JCIBX1n_IVYycUvo6Dl6cRsHk98",
  authDomain: "netahs-nextjs-yt.firebaseapp.com",
  projectId: "netahs-nextjs-yt",
  storageBucket: "netahs-nextjs-yt.appspot.com",
  messagingSenderId: "1077784718287",
  appId: "1:1077784718287:web:895cb20f0ce9f42df080ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
