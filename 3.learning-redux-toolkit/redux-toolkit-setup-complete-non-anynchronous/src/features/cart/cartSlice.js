import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isLoading: false
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []; // THE STATE OF OTHER OBJECT PROPERTIES IS MAINTAINED BY THE IMMER LIBRARY
        },
        // clearCart: (state)=> {
        //     return { cartItems: [] };
        // }
        // THIS WILL CHANGE THE ENTIRE INITIAL STATE TO const initialState = { cartItems: [] } WITH ALL OTHER PROPERTIES LOST/REMOVED
        removeItem: (state, action) => {
            // console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, { payload })=> { // ACTION IS DESTRUCTURED HERE
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload })=> {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        }, 
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        
    }
});

export const {clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;