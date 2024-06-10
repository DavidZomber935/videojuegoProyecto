import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5dihH02zE6dmG0QS8zRA7e2qb-3nBL50",
    authDomain: "videojuegoproyecto-e4711.firebaseapp.com",
    projectId: "videojuegoproyecto-e4711",
    storageBucket: "videojuegoproyecto-e4711.appspot.com",
    messagingSenderId: "1087906488652",
    appId: "1:1087906488652:web:ecd345ac5d4cb168b9efe9"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);