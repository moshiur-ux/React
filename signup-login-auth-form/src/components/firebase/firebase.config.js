// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrJbCWdiyxlL0hsrxmi92jchk4sxzrmks",
  authDomain: "signup-login-auth-from.firebaseapp.com",
  projectId: "signup-login-auth-from",
  storageBucket: "signup-login-auth-from.appspot.com",
  messagingSenderId: "210525706681",
  appId: "1:210525706681:web:eb99b8f792e7556d057e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;