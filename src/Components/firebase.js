import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgPWCvq5t-Cappkt6W2rtHMEGiaF4YWks",
  authDomain: "adv3-b6c17.firebaseapp.com",
  databaseURL: "https://adv3-b6c17.firebaseio.com",
  projectId: "adv3-b6c17",
  storageBucket: "adv3-b6c17.appspot.com",
  messagingSenderId: "800153946377",
  appId: "1:800153946377:web:060693616a8e2c1917ebd8",
  measurementId: "G-VB6RW1M5TN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };