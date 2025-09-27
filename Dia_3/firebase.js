// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7tjDAYzGDiKECae-NVdjveLApsGpLGMM",
  authDomain: "lechuzaapp.firebaseapp.com",
  projectId: "lechuzaapp",
  storageBucket: "lechuzaapp.firebasestorage.app",
  messagingSenderId: "652647828795",
  appId: "1:652647828795:web:5aa6f57801e6987234bb1e",
  measurementId: "G-FTFCX85R2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
