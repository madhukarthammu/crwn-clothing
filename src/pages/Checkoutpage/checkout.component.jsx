import React from 'react'
import CheckoutItem from '../../components/Checkout-Item/checkout-item.component'
import {connect} from 'react-redux'
import {SelectCartItems} from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
    
          {
              cartItems.map(cartitem => (
                <CheckoutItem key={cartitem.id} cartitem = {cartitem}/>
              )
              )
          }

      </div>
)

const mapStateToProps = (state) => ({
    cartItems: SelectCartItems(state)
})

export default connect(mapStateToProps)(CheckoutPage);