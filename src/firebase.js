// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf67DyLbxRaU3AYhc7hOJoS7Yd3ORSGFI",
  authDomain: "innovio-c4a76.firebaseapp.com",
  projectId: "innovio-c4a76",
  storageBucket: "innovio-c4a76.appspot.com",
  messagingSenderId: "1097147368796",
  appId: "1:1097147368796:web:40d92a2353a9f12015ad99",
  measurementId: "G-5VNBYW8FJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);