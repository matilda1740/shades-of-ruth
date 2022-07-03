import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYLAgB4Ox51aRMGxnbG-fljUBhFxDEpE0",
  authDomain: "shadesofruthbackend.firebaseapp.com",
  projectId: "shadesofruthbackend",
  storageBucket: "shadesofruthbackend.appspot.com",
  messagingSenderId: "784575971376",
  appId: "1:784575971376:web:45a444cc0e526d92ce6df5",
  measurementId: "G-0NMEJQ0JVF"
};

const app = initializeApp(firebaseConfig);

export { app };