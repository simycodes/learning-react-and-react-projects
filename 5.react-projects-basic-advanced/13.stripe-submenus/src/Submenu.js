import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {isSubmenuOpen, location, page: {page, links}} = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2")
  // IF location changes, run useEffect - location helps move to the right link when user hovers the nav links
  useEffect(()=> {
    setColumns("col-2");
    // GET THE aside ELEMENT
    const submenu = container.current;
    // GET THE POSITION OF THE NAV LINK HOVERED ON
    const {navLinkCenterPoint, navLinkBottomPoint} = location;
    // GO TO THE RIGHT NAV LINK BY SETTING INLINE CSS USING THE LOCATION RECEIVED
    submenu.style.left = `${navLinkCenterPoint}px`;
    submenu.style.top = `${navLinkBottomPoint}px`;
    // CHANGE LENGTH OF THE SUB LINKS CONTAINER
    if(links.length === 3) {
      setColumns("col-3");
    }
    if(links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside 
    className={ `${isSubmenuOpen? 'submenu show': 'submenu'}`}
    ref={container}
    >
      <h4>{page}</h4>
      <div className={ `submenu-center ${columns}`}>
        {
          links.map((link, index)=> {
            const {label, icon, url} = link;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })
        }
      </div>
    </aside>
  )
}

export default Submenu
