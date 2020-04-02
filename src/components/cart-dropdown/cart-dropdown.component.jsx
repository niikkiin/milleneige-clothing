import React from 'react';

// styles
import './cart-dropdown.styles.scss';

// components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

// reducer
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => 
        <CartItem key={cartItem.id} item={cartItem} />
        )
      }
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

const mapStateToProps = ( state ) => ({
  cartItems: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartDropdown);