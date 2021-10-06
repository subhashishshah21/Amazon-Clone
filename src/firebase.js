import firebase from 'firebase'
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDEUjQdrSY7bOC1prhxPHDpqi3lFO_jT54",
    authDomain: "clone-8b14c.firebaseapp.com",
    projectId: "clone-8b14c",
    storageBucket: "clone-8b14c.appspot.com",
    messagingSenderId: "393103791811",
    appId: "1:393103791811:web:21e1e499009c13dc3c3476",
    measurementId: "G-KY4Y9HMD4Z"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};