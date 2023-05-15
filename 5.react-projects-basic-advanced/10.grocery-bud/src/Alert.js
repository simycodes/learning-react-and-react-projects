import React, { useEffect } from 'react'

const Alert = ({ type, msg, showAlert, list}) => {

  useEffect(()=> {
    const timeout = setTimeout(()=> {
    showAlert(); // default: showAlert = (show = false, type='', msg = '') => {}
    // showAlert function is called without arguments making it false
    // so the message alert gets removed from the display
   },3000)
   // clean up function
   return () => clearTimeout(timeout);

  },[list]);

  return (
    <p className={ `alert alert-${type}` }>{msg}</p>
  )
}

export default Alert
