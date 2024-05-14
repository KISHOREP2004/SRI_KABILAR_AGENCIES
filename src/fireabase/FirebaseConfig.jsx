// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP8Vcwv5vSpRp8L7DNsbElShsU2O1m4Go",
  authDomain: "my-first-project-a54ce.firebaseapp.com",
  projectId: "my-first-project-a54ce",
  storageBucket: "my-first-project-a54ce.appspot.com",
  messagingSenderId: "399388831964",
  appId: "1:399388831964:web:a36af926ee9afe216b4419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}