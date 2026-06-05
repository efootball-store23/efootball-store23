import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1igYKuYQ2v9tL9sMR6pkbsaXUzrwu7qk",
  authDomain: "efootball-store23.firebaseapp.com",
  projectId: "efootball-store23",
  storageBucket: "efootball-store23.appspot.com",
  messagingSenderId: "814650753728",
  appId: "1:814650753728:web:5dfeef912ee46aea16e325",
  measurementId: "G-6F0ENWTD3Z"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, onSnapshot };
