import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'
import {addItem} from '../../redux/cart/cart.actions'
import {removeItem} from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartitem, clearItem, addItem, removeItem}) => {
  const { imageUrl, name, quantity, price } = cartitem;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartitem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartitem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => clearItem(cartitem)}>&#10005;</div>
    </div>
  )};

  const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  })
  
  export default connect(null,mapDispatchToProps)(CheckoutItem);