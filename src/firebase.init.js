// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcw2uCKrLZEZe4bXdrGgsbtrDkRLtdRM",
  authDomain: "car-services-9bd8b.firebaseapp.com",
  projectId: "car-services-9bd8b",
  storageBucket: "car-services-9bd8b.appspot.com",
  messagingSenderId: "363258901953",
  appId: "1:363258901953:web:dc8b95439d90ee8f982b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;