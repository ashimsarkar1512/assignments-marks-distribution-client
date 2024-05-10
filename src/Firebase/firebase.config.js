// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfWpGZooK7wqkzVLVxfDuL0Ic8asjNLoM",
  authDomain: "assignments-mark-distribution.firebaseapp.com",
  projectId: "assignments-mark-distribution",
  storageBucket: "assignments-mark-distribution.appspot.com",
  messagingSenderId: "4247113721",
  appId: "1:4247113721:web:df3f08a0df0fe34ec7b728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;