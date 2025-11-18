// Import functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAs3Bzrz2IjJUNxGdGTNj4o65YDT0meqNJY",
  authDomain: "travelease-3b149.firebaseapp.com",
  projectId: "travelease-3b149",
  storageBucket: "travelease-3b149.firebasestorage.app",
  messagingSenderId: "539203867152",
  appId: "1:539203867152:web:c12ba92dd650f8a84a7b095",
  measurementId: "G-KJRH48SE0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB
export const db = getFirestore(app);