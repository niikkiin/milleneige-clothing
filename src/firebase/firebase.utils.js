import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAp0Am2hxg1f1SY8aa-xmhQA3jvnPHnkYc",
  authDomain: "milleneige-db.firebaseapp.com",
  databaseURL: "https://milleneige-db.firebaseio.com",
  projectId: "milleneige-db",
  storageBucket: "milleneige-db.appspot.com",
  messagingSenderId: "303617915192",
  appId: "1:303617915192:web:4833bfc1e64abe009d69cd",
  measurementId: "G-F795FRFL4X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;