// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCepfDemG8SovQE7vW-mjMMDsWeWUlVBHE",
  authDomain: "insta-clone-iskalmegh.firebaseapp.com",
  projectId: "insta-clone-iskalmegh",
  storageBucket: "insta-clone-iskalmegh.appspot.com",
  messagingSenderId: "78858099586",
  appId: "1:78858099586:web:9c5b78fe1459101ca50d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firebase = getFirestore(app)
const  storage = getStorage(app)

export {app, auth, firebase, storage};

