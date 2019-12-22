import React from 'react'
import { NavLink } from 'react-router-dom';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {removeDropdown} from '../../redux/cart/cart.actions'
import {selectAddNotificationItem, selectRemoveNotificationItem} from '../../redux/notification/notification.selectors'

const Header = ({hidden, dispatch, addNotification, removeNotification}) => {

      return (
      <React.Fragment>
        <div className="header">
          {
            addNotification === true ?
            <div className="added-notification">
              <span className="added-notification__text">
              ITEM ADDED <span>&#10004;</span>
              </span>
            </div>
            :
            null
           }
          {
          removeNotification === true ?
          <div className="removed-notification">
            <div className="removed-notification__text">
            ITEM REMOVED <span>&#10008;</span>
            </div>
          </div>
          :
          null
          }
          <div className="header__comp">
            <div className="header__comp__list" onClick={() => {window.scroll(0, 0); dispatch(removeDropdown())}}>
              <NavLink exact to="/" activeClassName="chosen">Home</NavLink>
            </div>
            <div className="header__comp__list" onClick={() => {window.scroll(0, 0); dispatch(removeDropdown())}}>
            <NavLink to="/products" activeClassName="chosen">Products</NavLink>
            </div>
            <div className="header__comp__list" onClick={() => {window.scroll(0, 0); dispatch(removeDropdown())}}>
            <NavLink to="/store" activeClassName="chosen">Store</NavLink>
            </div>
            <div className="header__comp__list" onClick={() => {window.scroll(0, 0); dispatch(removeDropdown())}}>
            <NavLink to="/contact" activeClassName="chosen">Contact</NavLink>
            </div>
            <CartIcon />
            {
          hidden ? null
          :
          <CartDropdown />
        }
          </div>

        </div>

        </React.Fragment>
)}

const mapStateToprops = createStructuredSelector({
  hidden: selectCartHidden,
  addNotification: selectAddNotificationItem,
  removeNotification: selectRemoveNotificationItem
})



export default connect(mapStateToprops)(Header);
