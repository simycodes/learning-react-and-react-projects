import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./store";
import { Provider } from "react-redux"; // used like AppProvider Component that holds context variable

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* ALL FUNCTIONALITY DEFINED IN AppProvider COMPONENT IS PUT IN store.JS THAT CONTAINS 
    DIFFERENT REDUCERS(WHICH HOLD APP GLOBAL STATES VARIABLES AND METHODS) DEFINED IN THE REACT APP */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// WITH createContext() and reducer SETUP
// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// in context.js file - normal reducer setup

// const AppContext = React.createContext();
// const AppProvider = ({ children }) => {
// const [state, dispatch] = useReducer(reducer, initialState);
// const clearCart = () => {
//   dispatch({ type: 'CLEAR_CART' });
// }
//   return (
//     <AppContext.Provider
//       value={{...state, clearCart, remove, increase, decrease }}
//     >
//       {children}
//     </AppContext.Provider>
// }
