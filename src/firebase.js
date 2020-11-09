import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTUaksEglXW-7dRvm1C24oXJiOEztsFCU",
  authDomain: "fir-dd1ff.firebaseapp.com",
  databaseURL: "https://fir-dd1ff.firebaseio.com",
  projectId: "fir-dd1ff",
  storageBucket: "fir-dd1ff.appspot.com",
  messagingSenderId: "487773661797",
  appId: "1:487773661797:web:ec3a330908564e6663748c",
  measurementId: "G-T6KEBW76JY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };