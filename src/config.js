import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8YbFVhBq6gsEZ5DKRHvfogVe18AXLZEQ",
  authDomain: "react-contacts-app-b3d20.firebaseapp.com",
  projectId: "react-contacts-app-b3d20",
  storageBucket: "react-contacts-app-b3d20.appspot.com",
  messagingSenderId: "345367511563",
  appId: "1:345367511563:web:accde5f55b9f699e22bd0e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;