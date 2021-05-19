import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe7Jd_7dr1tSlzoRnMqIspOHJJh6-sz4Y",
  authDomain: "whatsapp-clone-f4555.firebaseapp.com",
  projectId: "whatsapp-clone-f4555",
  storageBucket: "whatsapp-clone-f4555.appspot.com",
  messagingSenderId: "693520667287",
  appId: "1:693520667287:web:09ff5a82dc80222bf64fd2",
  measurementId: "G-YBT5R5RQ72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
