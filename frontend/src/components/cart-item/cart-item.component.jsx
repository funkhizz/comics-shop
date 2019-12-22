import React from 'react'
import './cart-item.styles.scss'
import {selectCartTotal} from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
const cartitem = ({item: {photo_main, price, title, quantity }, total}) => {
    return (
        <div className="cart__item">
            <img src={photo_main} alt={title} />
            <div className="cart__item-details">
            <span className="cart__item-details-name">{title}</span>
    <span className="cart__item-details-price">{quantity} x {price} = {total.toFixed(2)}£</span>

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    total: selectCartTotal
})

export default connect(mapStateToProps)(cartitem)