import firebase from 'firebase';
import 'firebase/auth';
import "firebase/firestore";

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