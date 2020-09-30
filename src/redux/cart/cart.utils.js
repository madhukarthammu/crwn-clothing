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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };