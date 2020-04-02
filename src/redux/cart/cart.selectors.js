import { createSelector } from 'reselect';

// input selector- does not use createselector
// output selector uses createselector

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => 
    accumulatedQuantity + cartItem.quantity,
    0
  )
)

