import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC14318JnBn2WrYE68FT-iNK9JqSuB-a3s",
  authDomain: "inventory-management-app-925b6.firebaseapp.com",
  projectId: "inventory-management-app-925b6",
  storageBucket: "inventory-management-app-925b6.appspot.com",
  messagingSenderId: "576046710153",
  appId: "1:576046710153:web:771a41aede611a949f3558",
  measurementId: "G-4WXLV98D9Y"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };