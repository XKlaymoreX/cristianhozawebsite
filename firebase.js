// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-mA8Jk9gQIlOBiZV5Kzza0zOn7GBDVPE",
  authDomain: "cristian-hoza-website.firebaseapp.com",
  projectId: "cristian-hoza-website",
  storageBucket: "cristian-hoza-website.appspot.com",
  messagingSenderId: "520723031095",
  appId: "1:520723031095:web:e49ed8ca2e53a669954bb2",
  measurementId: "G-ZEDCZ022F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)