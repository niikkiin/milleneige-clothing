import React from 'react';

// styles
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

// reducer
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingBagIcon className='shopping-icon' />
<span className="item-count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// selector
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);