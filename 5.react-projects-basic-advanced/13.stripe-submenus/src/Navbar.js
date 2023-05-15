import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSideBar, openSubmenu, closeSubmenu} = useGlobalContext();
  // FUNCTION TO DISPLAY SUBMENU(S) ON RIGHT NAV LINK
  const displaySubmenu = (e) => {
    // GET THE NAV LINK NAME
    const pageNavLinkName = e.target.textContent;
    // GET THE NAV LINK POSITION TO SHOW SUB LINKS ON RIGHT NAV LINK
    const navLinkPosition = e.target.getBoundingClientRect(); // returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    console.log(navLinkPosition);
    // CALCULATE & GET CENTER POSITION OF NAV LINK HOVERED ON
    const navLinkCenterPoint = (navLinkPosition.left + navLinkPosition.right) / 2;
    const navLinkBottomPoint = navLinkPosition.bottom - 3; // subtract 3 to create a space space between actual nav link and underneath sub links for each link
    // CALL FUNCTION TO GO TO RIGHT NAV LINK
    openSubmenu(pageNavLinkName, {navLinkCenterPoint, navLinkBottomPoint});
  }

  // CLOSE SUB MENU WHEN HOVERED OUT OF THE LINKS
  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe-logo" className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        {/* SIGN IN BUTTON */}
        <button className='btn signin-btn'>
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar
