import {call, takeLatest, put} from 'redux-saga/effects'
import ShopActionTypes from './shop.types'
import { firestore } from '../../firebase/firebase.utils'
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionFailure} from './shop.actions'

function* fetchCollections() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap))
    } catch(error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollections)
}

export function* shopSagas() {
    yield call(onFetchCollectionsStart);
}