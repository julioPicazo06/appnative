import firebase from 'firebase/app'

const fireConfig = {
    apiKey: "AIzaSyCNzbM6p2luMgr9naxmMr75cqCs0jEGORc",
    authDomain: "tenedores-7b275.firebaseapp.com",
    databaseURL: "https://tenedores-7b275.firebaseio.com",
    projectId: "tenedores-7b275",
    storageBucket: "tenedores-7b275.appspot.com",
    messagingSenderId: "525975918447",
    appId: "1:525975918447:web:275a41477f702b9339ba9a"
}


export const FireBase = firebase.initializeApp(fireConfig);