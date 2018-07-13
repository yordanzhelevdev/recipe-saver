// Initialize Firebase
import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCP8YcStMmf9NxK1JCZr9gji0QweAxkHxs",
  authDomain: "recipe-saver-db06b.firebaseapp.com",
  databaseURL: "https://recipe-saver-db06b.firebaseio.com",
  storageBucket: "recipe-saver-db06b.appspot.com",
  messagingSenderId: "742983827993"
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;
