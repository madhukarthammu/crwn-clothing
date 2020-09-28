import React from 'react'
import { ReactComponent as Shoppingbag } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {togglecarthidden} from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import {SelectConstItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = ({togglecarthidden, itemCount}) => (
    <div className="cart-icon">
        <Shoppingbag className="shopping-icon" onClick={togglecarthidden} />
        <span className="item-count ">{itemCount}</span>
    </div>
)

const mapStateToProps = (state) => ({
    itemCount: SelectConstItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    togglecarthidden : () => dispatch(togglecarthidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);