import { cartactiontypes } from './cart.types';
import { additemtocart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartitems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartactiontypes.TOGGLE_CART_HIDDEN : 
        return {
            ...state,
            hidden: !state.hidden
        }
        case cartactiontypes.ADD_ITEM :
            return {
                ...state,
                cartitems: additemtocart(state.cartitems, action.payload)
            }
        default :
        return state
    }
}

export default cartReducer;