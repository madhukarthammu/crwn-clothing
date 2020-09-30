import { cartactiontypes } from './cart.types';
import { additemtocart } from './cart.utils'
import { removeItemFromCart } from './cart.utils'

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
        case cartactiontypes.REMOVE_ITEM :
            return {
                ...state,
                cartitems: removeItemFromCart(state.cartitems, action.payload)
            }  
        case cartactiontypes.CLEAR_ITEM_FROM_CHECKOUT :
            return {
                ...state,             
                  cartitems: state.cartitems.filter(cartitem => cartitem.id !== action.payload.id) 
            }    
        default :
        return state
    }
}

export default cartReducer;