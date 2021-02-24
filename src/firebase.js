import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";


// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// });


const app = firebase.initializeApp({
    apiKey: "AIzaSyAOVB9JdjfkYJMXB4cnHX6boEwLnRhxOq4",
    authDomain: "real-estate-582a2.firebaseapp.com",
    projectId: "real-estate-582a2",
    storageBucket: "real-estate-582a2.appspot.com",
    messagingSenderId: "653244302250",
    appId: "1:653244302250:web:4ac111db7231a6a3c6a1d3",
    measurementId: "G-8FJDBWLCFP"
});


const firestore = app.firestore();

export const todoDB = {
    todos: firestore.collection('todos'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}
export const auth = app.auth();
export default app;