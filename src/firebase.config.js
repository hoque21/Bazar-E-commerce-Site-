// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrA-tmFh4_hZVWb9ftFLPSvRKosqCJpqc",
  authDomain: "new-e-commerce-7c7d6.firebaseapp.com",
  projectId: "new-e-commerce-7c7d6",
  storageBucket: "new-e-commerce-7c7d6.appspot.com",
  messagingSenderId: "66156101719",
  appId: "1:66156101719:web:8df91083a7ea0c54d22312",
  measurementId: "G-EVVDK7N6GZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);