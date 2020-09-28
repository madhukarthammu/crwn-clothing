import React from 'react'
import { ReactComponent as Shoppingbag } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {togglecarthidden} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CartIcon = ({togglecarthidden}) => (
    <div className="cart-icon">
        <Shoppingbag className="shopping-icon" onClick={togglecarthidden} />
        <span className="item-count ">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    togglecarthidden : () => dispatch(togglecarthidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);