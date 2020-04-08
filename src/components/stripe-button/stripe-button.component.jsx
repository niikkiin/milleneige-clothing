import React from 'react';

// styles
import './stripe-button.styles.scss';

// stripe payment
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_APiE95VD0D69fWwXsZMuInNb00ZLTaHV2c';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Milleneige Clothing Ltd.'
      billingAddress
      shippingAddress
      // image='../../../assets/milleneige-logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;