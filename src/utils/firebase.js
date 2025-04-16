import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChpGpJhYpcRnqToyj6r4tiMXUdBkXBsjQ",
  authDomain: "freelancer-api-adf1d.firebaseapp.com",
  projectId: "freelancer-api-adf1d",
  storageBucket: "freelancer-api-adf1d.firebasestorage.app",
  messagingSenderId: "333732410146",
  appId: "1:333732410146:web:ddbc5658328bc5ce02ab7b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
