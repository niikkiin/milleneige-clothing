import React from 'react';

// styles
import './cart-dropdown.styles.scss';

// components
import CustomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

export default CartDropdown;