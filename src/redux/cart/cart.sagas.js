import {call, takeLatest, put} from 'redux-saga/effects'
import {UserActionTypes} from '../user/user.types'
import {clearCart} from './cart.actions'

function* clearCartOnSignout() {
  yield put(clearCart())
}

function* onSignOutSuccess() {
   yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignout)
}

export function* cartSagas() {
    yield call(onSignOutSuccess);
}