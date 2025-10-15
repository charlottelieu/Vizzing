import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCaoUn0IAQSqQsnFf7VZdkUstY7OdyrqSA",
  authDomain: "vizzing-app.firebaseapp.com",
  projectId: "vizzing-app",
  storageBucket: "vizzing-app.firebasestorage.app",
  messagingSenderId: "932224168517",
  appId: "1:932224168517:web:d5bb789aa0d2075704e92c",
  measurementId: "G-6GFWLB3T8W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();