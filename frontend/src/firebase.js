// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8O4uGd9HfWmqYdmcrtrr45s6WQXEKVJc",
  authDomain: "askq-edfa1.firebaseapp.com",
  projectId: "askq-edfa1",
  storageBucket: "askq-edfa1.appspot.com",
  messagingSenderId: "233642092114",
  appId: "1:233642092114:web:cf551b0daca4f06202a18b",
  measurementId: "G-V1DH0VXGTS",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { auth, provider };
