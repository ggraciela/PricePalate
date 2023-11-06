//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyChJ-g3KySOVzk6SJdwm9DsKGbgWFR72PE",
  authDomain: "pricepalatebby31.firebaseapp.com",
  projectId: "pricepalatebby31",
  storageBucket: "pricepalatebby31.appspot.com",
  messagingSenderId: "225587008385",
  appId: "1:225587008385:web:5596d4b5b5ab3ab6200e80",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();