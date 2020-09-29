import React from 'react'
import CustomButton from '../Custom-Button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../Cart-Item/cart-item.component'
import { connect } from 'react-redux'
import {SelectCartItems} from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { togglecarthidden } from '../../redux/cart/cart.actions.js';

const CartDropdown = ({ cartitems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartitems.length ?
                cartitems.map(cartitem => (
                    <CartItem key={cartitem.id} item = {cartitem} />
                )) :
                <span className="empty-message">Your Cart is Empty</span>
            }
        </div>
        <CustomButton onClick={() => {history.push('/checkout'); 
                                    dispatch(togglecarthidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartitems: SelectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));