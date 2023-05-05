// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkBkBeaa82FdmRUqN4Hv_voECXtU-H5Qs",
  authDomain: "the-chefs-table.firebaseapp.com",
  projectId: "the-chefs-table",
  storageBucket: "the-chefs-table.appspot.com",
  messagingSenderId: "1046649024480",
  appId: "1:1046649024480:web:5c3925b6fd756e0abd0585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;