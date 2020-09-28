import { createSelector } from 'reselect'

const SelectCart = state => state.cart

export const SelectCartItems = createSelector(
    [SelectCart],
    (cart) => cart.cartitems
) 

export const SelectConstItemsCount = createSelector(
    [SelectCartItems],
    (cartitems) => cartitems.reduce((accumulatedQuantity, cartitem) => accumulatedQuantity + cartitem.quantity, 0 )
);

export const SelectCartHidden = createSelector(
    [SelectCart],
    (cart) => cart.hidden
)