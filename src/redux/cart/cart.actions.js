import { cartactiontypes } from "./cart.types";

export const togglecarthidden = () => ({
    type: cartactiontypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartactiontypes.ADD_ITEM,
    payload: item
})
