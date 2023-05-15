import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems"
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';


const initialState = {
    cartItems: [],
    amount: 5,
    total: 0,
    isLoading: false
};

// IMPLEMENTING ASYNC FUNCTIONALITY IN REACT TOOL KIT
// createAsyncThunk() CREATES THIS FUNCTIONALITY - 'cart/getCartItems' IS USER CREATED NAME ARGUMENT
// LIFE CYCLE HOOKS WITH NAME OF getCartItems WILL BE CREATED TO HANDLE ASYNC FUNCTIONALITIES
export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => { // async (name), async (name, thunkAPI)  IF RECEIVING AN ARGUMENT(S).
  try {
    // console.log(name); // IF ARGUMENT(name) IS PASSED-THEN ACCESSING IT
    console.log(thunkAPI.getState()); // thunkAPI holds the entire app state(all reducers defined)
    // using thunkAPI here only works when name(or other) argument is passed when calling getCartItems
    // thunkAPI.dispatch(openModal()); // ALL REDUCERS IN APP CAN BE ACCESSED AND USED
    const resp = await axios(url);
    return resp.data; //  RETURNING A PROMISE
  } catch (error) {
    console.log(error); // MAKE WRONG CHANGES TO URL TO SEE THIS EFFECT
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

// BASIC SETUP
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

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
    },
    extraReducers: { // THESE ARE LIFE CYCLE ACTIONS - FOR ASYNC FUNCTIONALITIES WHEN FETCHING DATA - 3 DIFFERENT STATES THAT THE FETCH PROCESS PASSES THROUGH
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const {clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;