import {initializeApp, getApps, getApp} from"firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7_N0Op5HYBEgjoL2G1BrYVzk9xYr425A",
    authDomain: "notion-clone-dd204.firebaseapp.com",
    projectId: "notion-clone-dd204",
    storageBucket: "notion-clone-dd204.firebasestorage.app",
    messagingSenderId: "179176162455",
    appId: "1:179176162455:web:239ade080d70ea9ae615d2"
  };

  const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };