import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwlHTkXg7gCXZHqwVuliaMbUxMhNZTWvQ",
  authDomain: "laboratorio06-f9cea.firebaseapp.com",
  projectId: "laboratorio06-f9cea",
  storageBucket: "laboratorio06-f9cea.appspot.com",
  messagingSenderId: "593328450503",
  appId: "1:593328450503:web:b1e5494d1b145dfcc347e2",
  measurementId: "G-8MT282Q5C3"
};
initializeApp(firebaseConfig)
export const database = getFirestore()
