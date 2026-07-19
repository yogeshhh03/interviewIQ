
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-5b21d.firebaseapp.com",
  projectId: "interviewiq-5b21d",
  storageBucket: "interviewiq-5b21d.firebasestorage.app",
  messagingSenderId: "665794576248",
  appId: "1:665794576248:web:e75b707604f3f7418b928d",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };