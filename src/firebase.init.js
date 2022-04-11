// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNporEoKkkEeIz7yWeNHwtqEZy8ZHXrF4",
  authDomain: "ema-john-firebase-ea31b.firebaseapp.com",
  projectId: "ema-john-firebase-ea31b",
  storageBucket: "ema-john-firebase-ea31b.appspot.com",
  messagingSenderId: "579644245030",
  appId: "1:579644245030:web:58f196b6d82d0383f652e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;