import React from 'react';

// styles
import './cart-dropdown.styles.scss';

// components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// router
import { withRouter } from 'react-router-dom';

// selectors
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
				<span className="empty-message">Your cart is empty.</span>
			)}
		</div>
		<CustomButton onClick={ () => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		} 
		}>Go to Checkout</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
