import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDEVIrfVPvtv2OzfhKL_0ea_OIlk5-2BWA",
  authDomain: "whatsapp-clonejs-2f7e2.firebaseapp.com",
  projectId: "whatsapp-clonejs-2f7e2",
  storageBucket: "whatsapp-clonejs-2f7e2.appspot.com",
  messagingSenderId: "729445530169",
  appId: "1:729445530169:web:09900ec89f9be4b1146be8",
  measurementId: "G-LG73TX0HBS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
