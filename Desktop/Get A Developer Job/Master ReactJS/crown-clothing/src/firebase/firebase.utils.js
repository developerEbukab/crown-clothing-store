import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyAfvW5rDCUsfdUpbnUO4ERIzw3UYTGYIfY",
  authDomain: "crown-clothing-c7af1.firebaseapp.com",
  databaseURL: "https://crown-clothing-c7af1.firebaseio.com",
  projectId: "crown-clothing-c7af1",
  storageBucket: "crown-clothing-c7af1.appspot.com",
  messagingSenderId: "518485664384",
  appId: "1:518485664384:web:96c764ac8a63bd750c3c65",
  measurementId: "G-ZLY3W26HWT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  console.log(snapShot)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (err) {
      console.log("Error creating user" , err)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;