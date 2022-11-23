import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9DpHGL3ohzEsmS2pysS337x21ZMX0RvE",

  authDomain: "fir-auth-a6334.firebaseapp.com",

  projectId: "fir-auth-a6334",

  storageBucket: "fir-auth-a6334.appspot.com",

  messagingSenderId: "291206947680",

  appId: "1:291206947680:web:9473dc17941cd604b47405",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
