import React from 'react'
import CheckoutItem from '../../components/Checkout-Item/checkout-item.component'
import { connect } from 'react-redux'
import { SelectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/Stripe-Button/stripe-button.component'

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
        <CheckoutItem key={cartitem.id} cartitem={cartitem} />
      )
      )
    }
    <div className='total'>TOTAL: ${total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 09/21 - CVV: 123
    </div>

      <StripeCheckoutButton price={total} />

  </div>
)

const mapStateToProps = (state) => ({
  cartItems: SelectCartItems(state),
  total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);