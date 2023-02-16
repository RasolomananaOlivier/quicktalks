// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPeBK7JysMg9FTDC_53e8SfUfEvkeJnBo",
  authDomain: "wechat-storage.firebaseapp.com",
  projectId: "wechat-storage",
  storageBucket: "wechat-storage.appspot.com",
  messagingSenderId: "912811808161",
  appId: "1:912811808161:web:61d48da9338d4c2797e7e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
