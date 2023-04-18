// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA33nLU7zm-570zNQX3gJaMMDyKHj79gt4",
  authDomain: "chat-dos-otarios.firebaseapp.com",
  projectId: "chat-dos-otarios",
  storageBucket: "chat-dos-otarios.appspot.com",
  messagingSenderId: "538722725194",
  appId: "1:538722725194:web:fe330542af036a35b225b3",
  measurementId: "G-J3CQXJ8VSX"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const CollectionRef= collection(db,'imagens')
