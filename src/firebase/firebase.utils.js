import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDt9_uUE_0CKrePtcGg2RBK5lV7a0Cuz80",
  authDomain: "crwn-db-petsurov.firebaseapp.com",
  projectId: "crwn-db-petsurov",
  storageBucket: "crwn-db-petsurov.appspot.com",
  messagingSenderId: "591942795020",
  appId: "1:591942795020:web:1f9808b0cd78e17628d329",
  measurementId: "G-087M9QDRNE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ pormt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
