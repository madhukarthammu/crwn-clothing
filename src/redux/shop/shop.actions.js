import ShopActionTypes from './shop.types'

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

