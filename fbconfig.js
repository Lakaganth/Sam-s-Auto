import firebase from "firebase";
import "@firebase/firestore";

var DB_CONFIG = {
  apiKey: "AIzaSyCWjOQfELX0vTaHuSCsTRKi_Wf4EZFt-no",
  authDomain: "samauto-ec680.firebaseapp.com",
  databaseURL: "https://samauto-ec680.firebaseio.com",
  projectId: "samauto-ec680",
  storageBucket: "samauto-ec680.appspot.com",
  messagingSenderId: "1085011756115",
  appId: "1:1085011756115:web:1db4735d99ea37c64672a6",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(DB_CONFIG);
}

const fb = firebase;
export default fb;
