import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartitem, clearItem}) => {
  const { imageUrl, name, quantity, price } = cartitem;
  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartitem)}>&#10005;</div>
    </div>
  )};

  const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
  })
  
  export default connect(null,mapDispatchToProps)(CheckoutItem);