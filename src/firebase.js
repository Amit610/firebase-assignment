// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDzQgubjKTlFWecqPPxTkGTMqzEGcihynI",
  authDomain: "fir-auth-3fce9.firebaseapp.com",
  projectId: "fir-auth-3fce9",
  storageBucket: "fir-auth-3fce9.appspot.com",
  messagingSenderId: "240744155156",
  appId: "1:240744155156:web:082bf52024d2df5487ff01",
  measurementId: "G-KYZE3GHBM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app, auth}