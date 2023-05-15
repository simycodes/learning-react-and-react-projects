import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSideBarOpen, closeSideBar} = useGlobalContext();
  // console.log(isSideBarOpen);
  return (
    <aside className={ `${isSideBarOpen? 'sidebar-wrapper show' :'sidebar-wrapper'}` }>
      <div className="sidebar">
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {
            sublinks.map((linkItem, index)=> {
              const {links, page} = linkItem;
              return ( 
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {
                      links.map((link, index)=> {
                        const { url, icon, label} = link;
                        return (
                          <a href={url} key={index}>
                            {icon}
                            {label}
                          </a>
                        )
                      })
                    }
                  </div>
                </article>
              )
            })
          }
        </div>

      </div>
    </aside>
  )
}

export default Sidebar
