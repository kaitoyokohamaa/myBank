import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const initalFirebase = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(initalFirebase);
} else {
  firebase.firestore(); // if already initialized, use that one
}

export const db = firebase.firestore();

export default firebase;
