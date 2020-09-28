import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children,isGoggleSignIn, inverted, ...otherprops}) => (
<button className={`${inverted ? 'inverted': ''} ${isGoggleSignIn ? 'google-signin': ''} custom-button`} {...otherprops}>{children}</button>
)

export default CustomButton;