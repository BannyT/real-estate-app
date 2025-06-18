// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqr0CD3OLytT9FJEuvROTK6qw5sai9mrQ",
    authDomain: "testproject-81cbf.firebaseapp.com",
    projectId: "testproject-81cbf",
    storageBucket: "testproject-81cbf.firebasestorage.app",
    messagingSenderId: "717690415002",
    appId: "1:717690415002:web:66c9f93f26d4d9fd3c7c23",
    measurementId: "G-TPMYS40WVC"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
