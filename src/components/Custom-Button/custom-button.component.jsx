import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children,isGoggleSignIn, ...otherprops}) => (
<button className={`${isGoggleSignIn ? 'google-signin': ''} custom-button`} {...otherprops}>{children}</button>
)

export default CustomButton;