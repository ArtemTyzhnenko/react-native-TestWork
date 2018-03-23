import firebase from 'react-native-firebase';

const config = {
    apiKey: "AIzaSyC5Ytjv_gRko5UfoeXhq-Lsm3JObrZVYCE",
    authDomain: "testwork-b0081.firebaseapp.com",
    databaseURL: "https://testwork-b0081.firebaseio.com/",
    storageBucket: "gs://testwork-b0081.appspot.com"
};
firebase.initializeApp(config);


export default firebase.firestore();