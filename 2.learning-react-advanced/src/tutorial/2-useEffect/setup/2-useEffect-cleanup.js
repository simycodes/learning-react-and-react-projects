import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(()=>{
    window.addEventListener("resize", checkSize);
    // Clean up function - use it to unset effects that continous executions/runs
    return () => {
      console.log("cleanup function");
      window.removeEventListener("resize",checkSize);
    }
  });

  return (
    <>
    <h1>Window</h1>
    <h2>{size} PX</h2>
    </>
  ) 
};

export default UseEffectCleanup;
