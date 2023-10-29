import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjuXu5B4ezWgXBMsRjhmtnHNiPg3Zd0Yo",
  authDomain: "rentcar-3ae49.firebaseapp.com",
  databaseURL: "https://rentcar-3ae49-default-rtdb.firebaseio.com",
  projectId: "rentcar-3ae49",
  storageBucket: "rentcar-3ae49.appspot.com",
  messagingSenderId: "234916335963",
  appId: "1:234916335963:web:d5c0686749d39247bdca7e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
