import {all, call, takeLatest, put} from 'redux-saga/effects'
import {UserActionTypes} from './user.types'
import {createuserprofile, auth, provider, getCurrentUser} from '../../firebase/firebase.utils'
import {SignInSuccess,
        SignInFailure,
        signOutSuccess,
        signOutFailure,
        signUpSuccess,
        signUpFailure
    } from './user.actions'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try{
        const userref = yield call(createuserprofile, userAuth, additionalData)
        const snapshot = yield userref.get();
        yield put(SignInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }))
    } catch(error) {
       yield put (SignInFailure(error.message))
    }
}

function* SignInwithGoogle() {
try {
    const {user} = yield auth.signInWithPopup(provider);    
    yield getSnapshotFromUserAuth(user);
} catch(error){
   yield put (SignInFailure(error.message))
}
}

function* SignInwithEmail({payload: {email, password} }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
       yield put(SignInFailure(error.message))
    }
}    

function* SignOut() {
    try{
        yield auth.signOut()
        yield put(signOutSuccess());
    } catch(error) {
        put(signOutFailure(error.message))
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
          yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(SignInFailure(error));
    }

}

function* SignUp({ payload: {email, password, displayName} }) {
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
       yield put(signUpSuccess({
          user,
          additionalData: {displayName}
        }))
        
        alert('Signed Up Successfully, LOGGING IN......');
    } catch (error) {
       yield put(signUpFailure(error.message))
    }
} 

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
  }

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGNUP_START, SignUp)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, SignInwithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, SignInwithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGNOUT_START, SignOut)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp);
  }
  

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(onCheckUserSession),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]); 
}