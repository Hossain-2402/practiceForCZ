import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCKC3q1f4nr1Cklk4uD1BChPqC15DD4Ldw",
  authDomain: "democartproj.firebaseapp.com",
  projectId: "democartproj",
  storageBucket: "democartproj.appspot.com",
  messagingSenderId: "612779018811",
  appId: "1:612779018811:web:6af7599e8bc63cd99c2a1e"
};


const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

const ref_to_db = getDatabase(app);

export {ref_to_db};
export default db;


