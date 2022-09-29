// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG63mrCL3ywCKoDcHYX5Ev65_AGXaTB-w",
  authDomain: "kwaratech-auth.firebaseapp.com",
  projectId: "kwaratech-auth",
  storageBucket: "kwaratech-auth.appspot.com",
  messagingSenderId: "910596637290",
  appId: "1:910596637290:web:1250d8744fa5ea4a1cc013",
  measurementId: "G-Q12QZVEFWR",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
