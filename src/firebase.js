import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsyXUpOvnLfDeCAeEw8Hry8U17fbAqdBs",
  authDomain: "linkedin-clon-c08ad.firebaseapp.com",
  projectId: "linkedin-clon-c08ad",
  storageBucket: "linkedin-clon-c08ad.firebasestorage.app",
  messagingSenderId: "924699813537",
  appId: "1:924699813537:web:3b846d4d26b29cfe5a32e0",
};
const firebaseApp = firebase.inicializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
