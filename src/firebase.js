// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAToCTzaNWzgw6RG1_HDnL5_OfeK7Fq27s",
  authDomain: "deino-portfolio.firebaseapp.com",
  projectId: "deino-portfolio",
  storageBucket: "deino-portfolio.firebasestorage.app",
  messagingSenderId: "923228856886",
  appId: "1:923228856886:web:8573c37f7c9a4b2644ee97",
  measurementId: "G-FRJ3CNSPJS"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
