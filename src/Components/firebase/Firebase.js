import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD8foKWnT96y5azd68QpgY47foUACOrZ0",
  authDomain: "chat-app-b3fce.firebaseapp.com",
  projectId: "chat-app-b3fce",
  storageBucket: "chat-app-b3fce.appspot.com",
  messagingSenderId: "1013206850719",
  appId: "1:1013206850719:web:62f6b5e2c08829bdfa96aa",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const google = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, google, timestamp };
