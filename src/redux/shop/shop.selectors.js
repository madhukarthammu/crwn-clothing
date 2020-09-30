import {createSelector} from 'reselect'

const SelectShop = state => state.shop

export const SelectCollections =  createSelector(
    [SelectShop],
    (shop) => shop.collections
)