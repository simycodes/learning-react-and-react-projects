import React, { useState, useContext } from 'react'
import sublinks from './data';

const AppContext = React.createContext();

// FUNCTION HOLDING VARIABLES TO BE ACCESSED GLOBALLY
export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links: []});

    const openSideBar = () => {
        setIsSideBarOpen(true);
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

     const openSubmenu = (text, coordinates) => {
        // GET NAV LINK PAGE NAME USER HOVERED ON
        const page = sublinks.find((link)=> link.page === text);
        setPage(page);
        // GET AND SET THE NAV LINK LOCATION 
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{isSideBarOpen, isSubmenuOpen, openSideBar, openSubmenu, closeSideBar, closeSubmenu, location, page}}>
            { children }
        </AppContext.Provider>
    )
}

// CUSTOM HOOK THAT DIRECTLY CALLS THE APP CONTEXT
export const useGlobalContext = () => {
    return useContext(AppContext);
}
