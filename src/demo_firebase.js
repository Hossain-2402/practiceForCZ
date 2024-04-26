import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCKC3q1f4nr1Cklk4uD1BChPqC15DD4Ldw",
  authDomain: "democartproj.firebaseapp.com",
  projectId: "democartproj",
  storageBucket: "democartproj.appspot.com",
  messagingSenderId: "612779018811",
  appId: "1:612779018811:web:6af7599e8bc63cd99c2a1e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);