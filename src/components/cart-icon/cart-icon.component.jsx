import React from 'react';

// styles
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

// reducer
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBagIcon className='shopping-icon' />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);