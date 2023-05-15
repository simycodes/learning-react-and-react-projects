import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cartSlice"
import modalReducer from "./features/modal/modalSlice"

// store is the entire state of react app.
// It brings together and  holds together all various reducers created in a react app
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})