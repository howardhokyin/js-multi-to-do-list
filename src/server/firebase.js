// src/server/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCONAHRBsV2sfQtYwzYxnjPqLcOAMtCdMw',
  authDomain: 'to-do-list-1b04b.firebaseapp.com',
  projectId: 'to-do-list-1b04b',
  storageBucket: 'to-do-list-1b04b.appspot.com',
  messagingSenderId: '553832688021',
  appId: '1:553832688021:web:17a62f182f1459e553ee9c',
  measurementId: 'G-P6FWHJ73QZ',
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDB = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, firebaseDB };
