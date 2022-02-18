// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYs25M_k19RyZWdM1v_3ftpbpG_uI1en8",
  authDomain: "createpurpose-equipo.firebaseapp.com",
  projectId: "createpurpose-equipo",
  storageBucket: "createpurpose-equipo.appspot.com",
  messagingSenderId: "783624684564",
  appId: "1:783624684564:web:21ced74eaf592e965a1301"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;