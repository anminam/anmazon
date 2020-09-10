import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQvZpGTIfgNerJ2tit4soxqrOq-SlZOhg",
  authDomain: "anmazon.firebaseapp.com",
  databaseURL: "https://anmazon.firebaseio.com",
  projectId: "anmazon",
  storageBucket: "anmazon.appspot.com",
  messagingSenderId: "358474395549",
  appId: "1:358474395549:web:0cb2c1599072897e92c974",
  measurementId: "G-LN4SBJV4SP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
