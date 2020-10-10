import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../Cart-Icon/cart-icon.component'
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectCurrentUser } from '../../redux/user/user.selectors'
import { SelectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <div className="header">
        <div className="logo-container">
            <Link to="/">
                <Logo className="logo" />
            </Link>
       
        </div>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ? 
                <div className="option" onClick={ signOutStart }>SIGN OUT</div>
                :    <Link className="option" to="/signinsignup">SIGNIN</Link>
            } 
           
            <CartIcon />      
        </div>
        { hidden ? null :  <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: SelectCurrentUser,
    hidden: SelectCartHidden
}) 

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);