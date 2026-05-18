// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAMtdZjqQn6OObblyDUNW44DiHesK6dcrQ",
  authDomain: "greenhouse-6a42a.firebaseapp.com",
  databaseURL: "https://greenhouse-6a42a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "greenhouse-6a42a",
  storageBucket: "greenhouse-6a42a.firebasestorage.app",
  messagingSenderId: "216104212595",
  appId: "1:216104212595:web:9317f2384b4fc1f7ea7206",
  measurementId: "G-XFZF05HYT1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
