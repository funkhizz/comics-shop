import {createSelector} from 'reselect'

const selectNotification = state => state.notification

export const selectAddNotificationItem = createSelector(
    [selectNotification],
    (notification) => notification.addCartNotification
)

export const selectRemoveNotificationItem = createSelector(
    [selectNotification],
    (notification) => notification.removeCartNotification
)

