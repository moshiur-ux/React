// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGWLfeA6Rpi2vRCvwrEVE3AHdh04WJ5HY",
  authDomain: "auth-moha-milon-9e533.firebaseapp.com",
  projectId: "auth-moha-milon-9e533",
  storageBucket: "auth-moha-milon-9e533.appspot.com",
  messagingSenderId: "1022687333290",
  appId: "1:1022687333290:web:7c4455123ad7445e4d39d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
