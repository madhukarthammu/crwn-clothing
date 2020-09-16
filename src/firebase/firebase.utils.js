import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBrlTul6iBy_2Cvana8Q9VIClXqNz3JgEc",
    authDomain: "crwn-db-d61a2.firebaseapp.com",
    databaseURL: "https://crwn-db-d61a2.firebaseio.com",
    projectId: "crwn-db-d61a2",
    storageBucket: "crwn-db-d61a2.appspot.com",
    messagingSenderId: "682049249568",
    appId: "1:682049249568:web:9cef22274e2badc26f3745",
    measurementId: "G-VRWFRLCN2X"
}

firebase.initializeApp(config);

export const createuserprofile = async (userAuth, additionaldata) => {
    if (!userAuth) return;

    const userref = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =await userref.get(); 

    if(!snapShot.exists){
        const { email, displayName } = userAuth;
        const createdAt = new Date();
        try{
          await userref.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
        }catch(error) {
            console.error(error);
        }
    }
    return userref;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const SignInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;