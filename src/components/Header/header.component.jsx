import React from 'react'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <Logo className="logo" />
        </div>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            <Link className="option" to="/signinsignup">SIGNIN</Link>
        </div>
    </div>
)

export default Header;