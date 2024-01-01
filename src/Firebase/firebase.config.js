// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtAo1pMkSb1IVUe00T0-DQ7qbkrSCfHeg",
  authDomain: "meet-up-media.firebaseapp.com",
  projectId: "meet-up-media",
  storageBucket: "meet-up-media.appspot.com",
  messagingSenderId: "714606227224",
  appId: "1:714606227224:web:7bd6e9da051609d2f1786d",
  measurementId: "G-939R74FWCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);