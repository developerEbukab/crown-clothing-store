import React from 'react';
import StripCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_kTapcITyJvtXfvGOtSLqvAkI00Xjinz8W3"

  const onToken = token => { 
    alert("Payment success")
  }

  return (
    <StripCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripCheckoutButton;


