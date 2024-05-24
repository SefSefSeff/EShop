// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClUDrrXx6Qr7-APoh5J6jlwPaowuoweQA",
    authDomain: "eshop-4df54.firebaseapp.com",
    projectId: "eshop-4df54",
    storageBucket: "eshop-4df54.appspot.com",
    messagingSenderId: "561796430655",
    appId: "1:561796430655:web:6c01e56fe23880b9b2b18a",
    measurementId: "G-KQYHQE11DJ"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }