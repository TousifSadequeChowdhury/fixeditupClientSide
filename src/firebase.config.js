// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH_2RA0ZvCO_qjx5LAQb3Ps4M6i4Jfhhg",
  authDomain: "fixeditup-99aec.firebaseapp.com",
  projectId: "fixeditup-99aec",
  storageBucket: "fixeditup-99aec.firebasestorage.app",
  messagingSenderId: "514393459366",
  appId: "1:514393459366:web:269833c34f562c6f748267",
  measurementId: "G-MH1EQ07VP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);

// Export initialized services
export { auth, db, googleProvider };
