import ShopActionTypes from './shop.types'
import { firestore } from '../../firebase/firebase.utils'
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());   
        
        collectionRef.get().then(snapShot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionMap))
        }).catch(error => dispatch(fetchCollectionFailure(error.message)))
}
}