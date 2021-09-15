import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_RM3IIAToukR3bUxVJdr-EeLdYTjC3Wo",
    authDomain: "snapshop-ab234.firebaseapp.com",
    projectId: "snapshop-ab234",
    storageBucket: "snapshop-ab234.appspot.com",
    messagingSenderId: "350949367464",
    appId: "1:350949367464:web:bb2d2a22476590c87eec9d"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export {
    db,
    facebookAuthProvider,
    firebase
}