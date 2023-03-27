// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLXjrsw_AzwZ__Nr0AcEqlJrC9AquY0tM",
  authDomain: "realtor-clone-597d4.firebaseapp.com",
  projectId: "realtor-clone-597d4",
  storageBucket: "realtor-clone-597d4.appspot.com",
  messagingSenderId: "601453778826",
  appId: "1:601453778826:web:fc5ec5b50adf06ec2f9a73",
  measurementId: "G-J0784PTGX5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();