import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

// Getting the context variable and context provider component
import { AppContext, useGlobalContext } from './context';

const Home = () => {
  // Getting prop passed in context variable in a sub component
  const {openSideBar, openModal } = useContext(AppContext);
  // const openSideBar  = useGlobalContext(); // same as code above in functionality but using a custom hook and variables
  // console.log(openSideBar);

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars />
      </button>
      <div className="btn" onClick={openModal}>
        show modal
      </div>
    </main>
  )
}

export default Home
