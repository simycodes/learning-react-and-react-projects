import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // console.log(useSelector((store)=>{console.log(store)}))
  // The useSelector function that accesses the entire state(store) of the react app.It takes in a return function as an argument, having the store(entire app state).
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;