import firebase  from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaPRXKVFPyaHvNc0JTt2yNii-DuTZ0Iy4",
  authDomain: "linkedin-clone-31d8b.firebaseapp.com",
  projectId: "linkedin-clone-31d8b",
  storageBucket: "linkedin-clone-31d8b.appspot.com",
  messagingSenderId: "657144188385",
  appId: "1:657144188385:web:347d47b33cce8a3e6416a0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}