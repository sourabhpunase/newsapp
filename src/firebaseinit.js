// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfHvFKov3Hk1DSO6EfcmfwfuofkIIpok",
  authDomain: "news-36f41.firebaseapp.com",
  projectId: "news-36f41",
  storageBucket: "news-36f41.appspot.com",
  messagingSenderId: "636930186542",
  appId: "1:636930186542:web:30170f9c5075730a632ebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)