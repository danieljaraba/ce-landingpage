// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8lQKk7KCIXuIcMyvOR7VCfVEuMKECc0g",
  authDomain: "ce-landigpage.firebaseapp.com",
  projectId: "ce-landigpage",
  storageBucket: "ce-landigpage.appspot.com",
  messagingSenderId: "892039317766",
  appId: "1:892039317766:web:d913d225ce828846f87687",
  measurementId: "G-MCG2HNWHYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);