import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhSUFT1VfSZ8lf18Df7YhDupi3j5RYi8s",
  authDomain: "epicbytesrl.firebaseapp.com",
  projectId: "epicbytesrl",
  storageBucket: "epicbytesrl.appspot.com",
  messagingSenderId: "516622874299",
  appId: "1:516622874299:web:e470894c15d455699cdb9e",
  measurementId: "G-QSJNR2TMNR"
};

export const appDb = firebase.initializeApp(firebaseConfig);
