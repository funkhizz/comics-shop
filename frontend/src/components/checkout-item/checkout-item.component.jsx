import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import {addCartNotificationDisplay, addCartNotificationRemove, removeCartNotificationDisplay, removeCartNotificationRemove} from '../../redux/notification/notification.actions'


const ChechoutItem = ({cartItem, clearItemFromCart, addItem, removeItem, addCartNotificationDisplay, addCartNotificationRemove, removeCartNotificationDisplay, removeCartNotificationRemove}) => {
    const {title, photo_main, price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={photo_main} alt={title} />
            </div>
    <span className="name">{title}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => {removeItem(cartItem); removeCartNotificationDisplay(); setTimeout(() => {removeCartNotificationRemove()}, 500)}}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => {addItem(cartItem); addCartNotificationDisplay(); setTimeout(() => {addCartNotificationRemove()}, 500)}}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => {clearItemFromCart(cartItem); removeCartNotificationDisplay(); setTimeout(() => {removeCartNotificationRemove()}, 500)}}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addCartNotificationDisplay: () => dispatch(addCartNotificationDisplay()),
    addCartNotificationRemove: () => dispatch(addCartNotificationRemove()),
    removeCartNotificationDisplay: () => dispatch(removeCartNotificationDisplay()),
    removeCartNotificationRemove: () => dispatch(removeCartNotificationRemove())
})

export default connect(null, mapDispatchToProps)(ChechoutItem)