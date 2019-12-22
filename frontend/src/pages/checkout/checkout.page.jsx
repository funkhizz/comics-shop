import React from 'react'
import './checkout.styles.scss'
import PageTitle from '../../components/page-title/page-title.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="checkout">
            <PageTitle name="Checkout"></PageTitle>
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                }
                <div className="total">
            <span>TOTAL: {total.toFixed(2)} £</span>
                </div>
                <div className="test-warning">
                    *Please use the following test card
                    <br />
                    4242 4242 4242 4242 = exp: 01/21 - CVV: 123
                </div>
                <StripeCheckoutButton price={total.toFixed(2)}/>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)