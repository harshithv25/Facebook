import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCot__U9ZE8Eq_MdoTsnfSKC-gsLfsZO40",
    authDomain: "messenger-vintage-25.firebaseapp.com",
    databaseURL: "https://messenger-vintage-25.firebaseio.com",
    projectId: "messenger-vintage-25",
    storageBucket: "messenger-vintage-25.appspot.com",
    messagingSenderId: "179273697632",
    appId: "1:179273697632:web:29c8b1c50860f899f87605",
    measurementId: "G-6EHQ62HGTY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;