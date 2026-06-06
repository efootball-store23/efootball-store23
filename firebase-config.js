import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1igYKuYQ2v9tL9sMR6pkbsaXUzrwu7qk",
  authDomain: "efootball-store23.firebaseapp.com",
  projectId: "efootball-store23",
  storageBucket: "efootball-store23.firebasestorage.app",
  messagingSenderId: "814650753728",
  appId: "1:814650753728:web:5dfeef912ee46aea16e325"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };