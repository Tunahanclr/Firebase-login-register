import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyAwJ7Gzxy4YKEvUTKBGO6psHxircid95rs",
  authDomain: "fir-a-2726a.firebaseapp.com",
  projectId: "fir-a-2726a",
  storageBucket: "fir-a-2726a.appspot.com",
  messagingSenderId: "637361718657",
  appId: "1:637361718657:web:da585a341ed06ac07f1480"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
