import NotificationActionTypes from './notification.types'

export const addCartNotificationDisplay = () => ({
    type: NotificationActionTypes.ADD_CART_NOTIFICATION_DISPLAY
})

export const addCartNotificationRemove = () => ({
    type: NotificationActionTypes.ADD_CART_NOTIFICATION_REMOVE
})

export const removeCartNotificationDisplay = () => ({
    type: NotificationActionTypes.REMOVE_CART_NOTIFICATION_DISPLAY
})

export const removeCartNotificationRemove = () => ({
    type: NotificationActionTypes.REMOVE_CART_NOTIFICATION_REMOVE
})