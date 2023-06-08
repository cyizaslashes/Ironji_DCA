//firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFTlgqJYy1CY_kLwwJuzJ9p7M4PF-UP1w",
    authDomain: "ironji-datacolletionapp.firebaseapp.com",
    projectId: "ironji-datacolletionapp",
    storageBucket: "ironji-datacolletionapp.appspot.com",
    messagingSenderId: "597377880741",
    appId: "1:597377880741:web:5fa4356158f604007ff34c",
    measurementId: "G-EQJSS74YRG"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export{firebase};