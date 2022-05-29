// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";



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
if (firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();
export {auth, db};
