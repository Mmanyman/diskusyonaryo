import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-wQ79nOEv5pL2sjw7O04nE77Awem12LQ",
  authDomain: "diskusyonaryo-72541.firebaseapp.com",
  projectId: "diskusyonaryo-72541",
  storageBucket: "diskusyonaryo-72541.appspot.com",
  messagingSenderId: "82454232374",
  appId: "1:82454232374:web:bd4ae2bc49591b21aa8797"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);