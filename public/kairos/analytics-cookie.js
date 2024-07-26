import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

let analytics;

const firebaseConfig = {
    apiKey: "AIzaSyA_tV7xni_HrzhzdSv-RzQ3elQyR-EylRE",
    authDomain: "manai-be422.firebaseapp.com",
    projectId: "manai-be422",
    storageBucket: "manai-be422.appspot.com",
    messagingSenderId: "84094790207",
    appId: "1:84094790207:web:d69f75e3712c953b38668a",
    measurementId: "G-TLXS1CCJEN"
  };

export const initializeFirebase = () => {
    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
};
