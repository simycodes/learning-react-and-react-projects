import Navbar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store)=> store.cart);
  const { isOpen } = useSelector((store)=> store.modal);
  const dispatch = useDispatch();
  // import { useGlobalContext } from './context' -- IN useReducer STANDARD SETUP

  // RECALCULATE THE ITEMS AMOUNT AND TOTAL EVERY TIME THE CART IS MODIFIED BY THE USER 
  useEffect(()=>{
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(()=>{
    dispatch(getCartItems("random"));
    // "random" PASSED ONLY FOR PURPOSE OF SHOWING FUNCTIONALITY
    // TO PASS ARGUMENTS AND USE thunkAPI ARGUMENT
  },[]);

  //IF PASSING ARGUMENTS(to cartSlice.js)
  // useEffect(()=>{
  //   dispatch(getCartItems("random"));
  // },[]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
