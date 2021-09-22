import {initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB-mA8Jk9gQIlOBiZV5Kzza0zOn7GBDVPE",
  authDomain: "cristian-hoza-website.firebaseapp.com",
  projectId: "cristian-hoza-website",
  storageBucket: "cristian-hoza-website.appspot.com",
  messagingSenderId: "520723031095",
  appId: "1:520723031095:web:e49ed8ca2e53a669954bb2",
  measurementId: "G-ZEDCZ022F4"
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app, 'gs://cristian-hoza-website.appspot.com')
