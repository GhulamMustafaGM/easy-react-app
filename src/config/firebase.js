import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBfHEEQ2Bu3hOxdYFjyRRoV7Uaepu-jBaQ",
    authDomain: "easyapp-database.firebaseapp.com",
    databaseURL: "https://easyapp-database-default-rtdb.firebaseio.com",
    projectId: "easyapp-database",
    storageBucket: "easyapp-database.appspot.com",
    messagingSenderId: "748907258",
    appId: "1:748907258:web:d185c89e65ec20ca00b743",
    measurementId: "G-39QZMLMGQT"
};
// Initialize Firebase
var myFirebase = firebase.initializeApp(firebaseConfig);
export default myFirebase;