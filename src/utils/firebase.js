// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx9MmYHQkO5qE3L-AE87Ulr9act7BIq_o",
  authDomain: "netflixin-ded36.firebaseapp.com",
  projectId: "netflixin-ded36",
  storageBucket: "netflixin-ded36.appspot.com",
  messagingSenderId: "656668970240",
  appId: "1:656668970240:web:bf62c439ad5ebc6e6d77e5",
  measurementId: "G-KRVRX2F53H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
