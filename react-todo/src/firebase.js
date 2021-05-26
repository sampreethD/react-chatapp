// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDA6HKXh1oSH_v1f2Abp8qI_yvT7L00xMY",
//     authDomain: "react-app-6953d.firebaseapp.com",
//     projectId: "react-app-6953d",
//     storageBucket: "react-app-6953d.appspot.com",
//     messagingSenderId: "661935502345",
//     appId: "1:661935502345:web:34e751b0a854dbbf70b4d8",
//     measurementId: "G-9JD29M9ESS"
//   };
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDA6HKXh1oSH_v1f2Abp8qI_yvT7L00xMY",
  authDomain: "react-app-6953d.firebaseapp.com",
  projectId: "react-app-6953d",
  storageBucket: "react-app-6953d.appspot.com",
  messagingSenderId: "661935502345",
  appId: "1:661935502345:web:34e751b0a854dbbf70b4d8",
  measurementId: "G-9JD29M9ESS"
});

var db = firebase.firestore();

export default db;
