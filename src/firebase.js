import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBleqkGx6t3iJ4A8x83QCNmZKPw7DUA4qM",
  authDomain: "agenda-9b9c1.firebaseapp.com",
  projectId: "agenda-9b9c1",
  storageBucket: "agenda-9b9c1.appspot.com",
  messagingSenderId: "830875737987",
  appId: "1:830875737987:web:8059a43fa07a084635a0b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
