import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSflrhAMUcnxc_McbfztPs1UOAt5SnSTc",
  authDomain: "react-learning-ai.firebaseapp.com",
  databaseURL:
    "https://react-learning-ai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-learning-ai",
  storageBucket: "react-learning-ai.appspot.com",
  messagingSenderId: "371003255860",
  appId: "1:371003255860:web:7e90da04c5ef4b5c60ae61",
  measurementId: "G-PKCGT8PYVC",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
