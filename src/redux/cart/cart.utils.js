export const additemtocart = (cartitems, cartitemtoadd) => {
    const existingCartItem = cartitems.find(cartitem => 
        cartitem.id === cartitemtoadd.id
    )

    if(existingCartItem) {
         return cartitems.map(cartitem => 
            cartitem.id === cartitemtoadd.id 
            ? { ...cartitem, quantity: cartitem.quantity + 1 }
            : cartitem
        )
    }

    return [ ...cartitems, { ...cartitemtoadd, quantity: 1 } ]
}