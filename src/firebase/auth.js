// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDA8OkbR74Pdc_qbXD_2J6rs4zMa1nzof4",
    authDomain: "team-predators-racing.firebaseapp.com",
    projectId: "team-predators-racing",
    storageBucket: "team-predators-racing.appspot.com",
    messagingSenderId: "863542469633",
    appId: "1:863542469633:web:c96695043c928b68128c00"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
// const provider = new GithubAuthProvider()
const db = getFirestore(app)

export { db, auth, analytics }