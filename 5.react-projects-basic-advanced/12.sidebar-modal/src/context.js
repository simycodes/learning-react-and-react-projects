import React, { useState, useContext } from 'react';

// the context variable will hold all props to be passed to sub components and will be
// accessed by useContext()
const AppContext = React.createContext();

// children as argument represent data passed in the parent component
// <React.StrictMode> and children in return is passing recieved data
// and passing it to <App /> which is the sub element in index.js page
// without these children - no components will be displayed -  errors
const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => {
        setIsSideBarOpen(true);
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return(
        //  Props to be passed initialized by useContext variable.provide value=""
        <AppContext.Provider value={{isSideBarOpen, isModalOpen, openSideBar, closeSideBar, openModal, closeModal}}>{children}</AppContext.Provider>
    )
}


// Defining a custom hook that will return useContext and AppContext
export const useGlobalContext = () => {
    return useContext(AppContext);
}


// The AppProvider  component can be avoided - but its just common practice to use another component as such
export {AppContext, AppProvider}

// To access the passed prop passed by the context variable.Provider, use the useContext hook which uses the context
// variable as an argument.
// The call using the useContext is done in the sub component that wants to use the passed prop.