import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2b912.firebaseapp.com",
  projectId: "reactchat-2b912",
  storageBucket: "reactchat-2b912.appspot.com",
  messagingSenderId: "767539492960",
  appId: "1:767539492960:web:e828b4e415aa4f9038eb05"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage= getStorage();