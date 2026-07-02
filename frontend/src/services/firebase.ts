// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLFL3-GOOoSJM0hTCuJWLIBJ8d3oHti-M",
  authDomain: "concert-companion-24a45.firebaseapp.com",
  projectId: "concert-companion-24a45",
  storageBucket: "concert-companion-24a45.firebasestorage.app",
  messagingSenderId: "36504499372",
  appId: "1:36504499372:web:dda676bd1b923464addb09",
  measurementId: "G-MS5V20N8T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };