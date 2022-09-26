import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSUl3zd6N-4EHPe6B34yRB1teZWtS_Nk0",
  authDomain: "mgr-tree-app.firebaseapp.com",
  projectId: "mgr-tree-app",
  storageBucket: "mgr-tree-app.appspot.com",
  messagingSenderId: "733147577498",
  appId: "1:733147577498:web:53c2f6365e6294358a3323",
  measurementId: "G-XCWFY4BGDY"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);