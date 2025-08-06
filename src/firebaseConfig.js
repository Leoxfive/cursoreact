import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvsry3KnxIK98PcvE0gi-eEllshCSAYQM",
  authDomain: "curso-react-46b06.firebaseapp.com",
  projectId: "curso-react-46b06",
  storageBucket: "curso-react-46b06.firebasestorage.app",
  messagingSenderId: "30883055232",
  appId: "1:30883055232:web:4fe9beccf25e9fbb438865",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);