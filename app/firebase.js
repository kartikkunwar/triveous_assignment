import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwiUJaWDKTfuc9CRxtZEvj23nPQqfB2ww",
  authDomain: "triveous-project-b61c1.firebaseapp.com",
  projectId: "triveous-project-b61c1",
  storageBucket: "triveous-project-b61c1.appspot.com",
  messagingSenderId: "73924500722",
  appId: "1:73924500722:web:36df8f2109298688d1046b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
