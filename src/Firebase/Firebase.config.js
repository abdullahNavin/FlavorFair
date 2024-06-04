// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_qGCDujFfzA9gXCGxMhfSKuPBvRVwzSY",
  authDomain: "assignment11-ac78c.firebaseapp.com",
  projectId: "assignment11-ac78c",
  storageBucket: "assignment11-ac78c.appspot.com",
  messagingSenderId: "756413168003",
  appId: "1:756413168003:web:82dafc127126b68dea1eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);