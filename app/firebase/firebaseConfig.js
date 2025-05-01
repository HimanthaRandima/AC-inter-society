// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVGZQLqWKpaBJWDTfSh9SHEihO7RwEsus",
  authDomain: "acvas-1ad47.firebaseapp.com",
  projectId: "acvas-1ad47",
  storageBucket: "acvas-1ad47.appspot.com",
  messagingSenderId: "749503289860",
  appId: "1:749503289860:web:4d09d4b2a4e17064bc3351",
  measurementId: "G-LQBV0QFXGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)
const analytics = getAnalytics(app);