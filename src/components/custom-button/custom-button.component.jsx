import React from 'react';

// styles
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in-button' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;