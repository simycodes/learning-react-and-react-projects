import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
     <button className='btn' onClick={() => setShow(!show)}>
      Show/Hide
     </button>
     {show && <Item />}
    </>
  ) 
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(()=> {
    window.addEventListener("resize", checkSize);
    // clean up function to remove series of resize event that can cause app to crush
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  },[]);

  return(
    <div style={{marginTop: "2rem"}}>
      <h1>Window</h1>
      <h2>size : {size} </h2> 
    </div>
  )
}

export default ShowHide;
