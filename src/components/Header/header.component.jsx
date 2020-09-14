import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

export default Header;