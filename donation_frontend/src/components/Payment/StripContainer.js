import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentFor from './PaymentFor';

const PUBLIC_Keys = "pk_test_51L8GQ1GLrnnGNjMcNxE7IKLNkM8qGuR777VS3KdoTGffc2wSYsAIf6KSnc0KEsnVj6qyiEBFkeXFREsFFDRdBKKZ005xMoHsv5";
const pk=loadStripe(PUBLIC_Keys)
const StripContainer = () => {
  return (
    <Elements stripe={pk}>
        <PaymentFor />
    </Elements>
  )
}

export default StripContainer