// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import * as firebaseall from "firebase";
import firebase from "firebase";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA5w7HELbwvA6wM4y7heQUmdwq2AQ0q-Kc",
  authDomain: "ultimointentoauthmovilesmutli.firebaseapp.com",
  projectId: "ultimointentoauthmovilesmutli",
  storageBucket: "ultimointentoauthmovilesmutli.appspot.com",
  messagingSenderId: "990364034496",
  appId: "1:990364034496:web:ebb342785a13281684d425"
};

//* Initialize Firebase

let app;
if (firebaseall.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export {auth};
export default { firebase, db };