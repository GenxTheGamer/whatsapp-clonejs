import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjUgPQjeF4UPcnHS04wfeO5tugiUpHu4k",
  authDomain: "whatsapp-clonejs-5b038.firebaseapp.com",
  projectId: "whatsapp-clonejs-5b038",
  storageBucket: "whatsapp-clonejs-5b038.appspot.com",
  messagingSenderId: "218359441077",
  appId: "1:218359441077:web:247934b0ada5c221d500fc",
  measurementId: "G-ERMTZ36R22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
