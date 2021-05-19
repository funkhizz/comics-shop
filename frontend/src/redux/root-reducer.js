// Actual base reducer object represents all state. COmbines all states together

import { combineReducers } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import comicsReducer from './comics/comics.reducer'
import cartReducer from './cart/cart.reducer'
import notificationReducer from './notification/notification.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'comics', 'notification']
}

const rootReducer = combineReducers({
    comics: comicsReducer,
    cart: cartReducer,
    notification: notificationReducer
})

export default persistReducer(persistConfig, rootReducer)
