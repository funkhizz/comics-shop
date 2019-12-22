import React from 'react'
import './product.styles.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './slider.scss';
import Carousel from '../carousel/carousel.component'
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'
import {addCartNotificationDisplay, addCartNotificationRemove} from '../../redux/notification/notification.actions'

const product = ({comic, addItem, addCartNotificationDisplay, addCartNotificationRemove}) => {
    const {title, author, universe, description, price} = comic;
    return (
        <div className="product">
            <div className="product__carousel">
                <Carousel comic={comic}/>
            </div>
            <div className="product__description">
            <div id="wave"></div>
                <div className="product__description-info">
                    <div className="product__description-info-title">
                        {title}
                    </div>
                    <div className="product__description-info-author">
                        <span>Author: </span>{author}
                    </div>
                    <div className="product__description-info-universe">
                        <span>Universe: </span>{universe}
                    </div>
                    <div className="product__description-info-description">
                        <span className="span-description">Description: </span>{description}<span className="span-description"></span>
                    </div>
                    <div className="product__description-info-price">
                        <CustomButton onClick={() => {addItem(comic); addCartNotificationDisplay(); setTimeout(() => {addCartNotificationRemove()}, 500);}} inverted>Add to Cart</CustomButton>
                        <span className="span-price">Price: </span>{price} £
                    </div>
                </div>
            </div>
        </div>
    )
    }

const mapDispatchToProps = dispatch => ({
    addItem: comic => dispatch(addItem(comic)),
    addCartNotificationDisplay: () => dispatch(addCartNotificationDisplay()),
    addCartNotificationRemove: () => dispatch(addCartNotificationRemove())
})

export default connect(null, mapDispatchToProps)(product)

