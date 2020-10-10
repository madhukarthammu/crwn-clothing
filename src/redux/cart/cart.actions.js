import { cartactiontypes } from "./cart.types";

export const togglecarthidden = () => ({
    type: cartactiontypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: cartactiontypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: cartactiontypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: cartactiontypes.CLEAR_ITEM_FROM_CHECKOUT,
    payload: item
})

export const clearCart = () => ({
    type: cartactiontypes.CLEAR_CART
})