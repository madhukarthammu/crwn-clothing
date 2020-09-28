import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../Cart-Icon/cart-icon.component'
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectCurrentUser } from '../../redux/user/user.selectors'
import { SelectCartHidden } from '../../redux/cart/cart.selectors'

const Header = ({ currentUser, hidden }) => (
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
                <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div>
                :    <Link className="option" to="/signinsignup">SIGNIN</Link>
            } 
            {
                currentUser ?  <span className="option">{ currentUser.displayName.toUpperCase() }</span> : null
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



export default connect(mapStateToProps)(Header);