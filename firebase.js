// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDidOESF8lPLvFs5ryNcJW0VrP0CnvRDHQ",
  authDomain: "eduverse-bf551.firebaseapp.com",
  projectId: "eduverse-bf551",
  storageBucket: "eduverse-bf551.firebasestorage.app",
  messagingSenderId: "1048542150292",
  appId: "1:1048542150292:web:50a011a1919f75cc6c3e81"
};
}// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Make auth usable globally
window.auth = auth;
