import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB_lVIHajoIvEuPHmx2p-6esw1k8zVAUBE",
    authDomain: "trolley-hero-flutter.firebaseapp.com",
    projectId: "trolley-hero-flutter",
    storageBucket: "trolley-hero-flutter.appspot.com",
    messagingSenderId: "643919990541",
    appId: "1:643919990541:web:afe69e356dca560e2e2a44",
    measurementId: "G-3Q9RGG9XRG"
};

firebase.initializeApp(firebaseConfig);

export default firebase;