// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWEMs9xFK65TovyDgGvx0vc2snOifxpPQ",
  authDomain: "udemy-clone-f70ea.firebaseapp.com",
  projectId: "udemy-clone-f70ea",
  storageBucket: "udemy-clone-f70ea.appspot.com",
  messagingSenderId: "469067606292",
  appId: "1:469067606292:web:40a9484a750afa760a3a01",
  measurementId: "G-L7CQB9GT6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
