// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXHSqUAwrZo-FxTXOW9GYoJCyIXg0SvKs",
  authDomain: "glassauthreact.firebaseapp.com",
  projectId: "glassauthreact",
  storageBucket: "glassauthreact.appspot.com",
  messagingSenderId: "198923027748",
  appId: "1:198923027748:web:be876874b4be829ecfdfb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);