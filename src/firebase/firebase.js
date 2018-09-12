import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCVhPO5zNlXrSpzmIUrCisfftQSz3fKRq0",
  authDomain: "luigymach-hackshackers.firebaseapp.com",
  databaseURL: "https://luigymach-hackshackers.firebaseio.com",
  projectId: "luigymach-hackshackers",
  storageBucket: "luigymach-hackshackers.appspot.com",
  messagingSenderId: "463672861371"
};

const devConfig = {
  apiKey: "AIzaSyCVhPO5zNlXrSpzmIUrCisfftQSz3fKRq0",
  authDomain: "luigymach-hackshackers.firebaseapp.com",
  databaseURL: "https://luigymach-hackshackers.firebaseio.com",
  projectId: "luigymach-hackshackers",
  storageBucket: "luigymach-hackshackers.appspot.com",
  messagingSenderId: "463672861371"
};




const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
