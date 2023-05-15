import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Getting the context variable and context provider component
import { AppProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>

    {/* This code below can also work with AppContext imported
    <AppContext.Provider value={{isSideBarOpen, isModalOpen, openSideBar, closeSideBar, openModal, closeModal}}>
      <App />
    </AppContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
)
