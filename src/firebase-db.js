import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyAvESRmx33-ttNjKikZ5-u0F4Edxy_U9MI",
    authDomain: "farc-2ec77.firebaseapp.com",
    databaseURL: "https://farc-2ec77.firebaseio.com",
    projectId: "farc-2ec77",
    storageBucket: "farc-2ec77.appspot.com",
    messagingSenderId: "454820127778"
};
firebase.initializeApp(config);

export const testDb = firebase.database().ref('test');
export const test2Db = firebase.database().ref('test2');
