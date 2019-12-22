import NotificationActionTypes from './notification.types'


const INITIAL_STATE = {
    addCartNotification: false,
    removeCartNotification: false
}

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NotificationActionTypes.ADD_CART_NOTIFICATION_DISPLAY:
            return {
                ...state,
                addCartNotification: true
            }
        case NotificationActionTypes.ADD_CART_NOTIFICATION_REMOVE:
            return {
                ...state,
                addCartNotification: false
            }
        case NotificationActionTypes.REMOVE_CART_NOTIFICATION_DISPLAY:
                return {
                    ...state,
                    removeCartNotification: true
                }
        case NotificationActionTypes.REMOVE_CART_NOTIFICATION_REMOVE:
            return {
                ...state,
                removeCartNotification: false
            }
        default:
            return state;
    }
}

export default notificationReducer