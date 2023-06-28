// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCEelaJc_oS_mFbZ28xTw27NVJv_JV1Pk",
  authDomain: "taskplus-34427.firebaseapp.com",
  projectId: "taskplus-34427",
  storageBucket: "taskplus-34427.appspot.com",
  messagingSenderId: "632687398458",
  appId: "1:632687398458:web:0e3193200f399bf82b2f03"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db}