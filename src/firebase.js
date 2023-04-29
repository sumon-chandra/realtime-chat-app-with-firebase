import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs2HsOzchUngf8DHFzjp2ERVrh6yFL6Rs",
  authDomain: "chat-2be8e.firebaseapp.com",
  projectId: "chat-2be8e",
  storageBucket: "chat-2be8e.appspot.com",
  messagingSenderId: "482483759901",
  appId: "1:482483759901:web:147f6e47a9bcbcd8cf0ff4",
  measurementId: "G-J7R5JNMZKY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
