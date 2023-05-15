 // STATE IS STATE OF GLOBAL VARIABLES BEFORE AN UPDATE
 const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }

    if(action.type === 'REMOVE') {
        // return {...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)}
        return {...state, cart: state.cart.filter((cartItem)=> {
            if(cartItem.id !== action.payload) {
                return cartItem;
            }
        })}
    }

    if(action.type === 'INCREASE') {
        let newCart = state.cart.map((cartItem)=> {
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem;
        })
        return {...state, cart: newCart}
    }
    
    if(action.type === 'DECREASE') {
        let newCart = state.cart.map((cartItem)=> {
            if(cartItem.id === action.payload){
                return {...cartItem, amount: cartItem.amount - 1}
            }
            return cartItem;
        }).filter((cartItem)=> cartItem.amount !== 0); // IF AMOUNT IS REDUCED TO 0, REMOVE ITEM
        return {...state, cart: newCart}
    }

    if(action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem)=> {
            // DESTRUCTURE EACH ITEM BEING ITERATED/WORKED ON BY THE RETURN/ARROW FUNCTION
            const { price, amount} = cartItem;
            // GET THE TOTAL PRICE MONEY FOR EACH ITEM IN CART
            const itemTotal = price * amount;
            // GET THE TOTAL ITEM AMOUNT AND PRICE
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;

            return cartTotal
        }, {total: 0, amount: 0})
        // REDUCE NUMBER OF DECIMAL PLACES TO 2 FOR THE TOTAL
        total = parseFloat(total.toFixed(2));

        return {...state, total, amount}
    }

    if(action.type === 'LOADING') {
        return {...state, loading: true}
    }

    if(action.type === 'DISPLAY_ITEMS') {
        return {...state, cart: action.payload, loading: false}
    }

    return state;
 }

 export default reducer;