import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import tony_avatar from '../../static/img/tony_avatar.jpg'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_mTBSEofkrKKR8fWQlUwx1dNs00IT6B91Tm'

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout
        currency="GBP"
        label='Please Pay Now'
        name='Brainies comics'
        billingAddress
        shippingAddress
        image={tony_avatar}
        description={`Your total is ${price} £`}
        amount={priceForStripe}
        panelLabel='Please Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        zipCode={false}
        />
    )
}

export default StripeCheckoutButton