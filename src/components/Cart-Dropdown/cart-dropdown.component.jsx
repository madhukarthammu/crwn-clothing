import React from 'react'
import CustomButton from '../Custom-Button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../Cart-Item/cart-item.component'
import { connect } from 'react-redux'
import {SelectCartItems} from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartitems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartitems.map(cartitem => (
                    <CartItem key={cartitem.id} item = {cartitem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartitems: SelectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);