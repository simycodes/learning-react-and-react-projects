import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

// useEffect() hook allows to perform side effects -side effect refers to works/functionalities/changes 
// performed outside of a component. This may include such as fetching data(API requests),signing up for a
// subscription,or setting up an event listener.
// It always runs after a component has been re-rendered.
// It is a hook that always has a return method as an argument.

const UseEffectBasics = () => {
  const [value, setValue] =  useState(0);
  useEffect(()=>{
    // code that runs after every re-render of a component
    console.log("Use Effect called-rendered Second - after component is rendered");
    // Hooks cannot be placed in bodies of if-else conditions but if-else can be used inside hooks
    if(value >= 1){
    // the document title changes
    document.title = `New Message(${value})`;
    }
  },[value]);

  // This useEffect() will only run once(initial render) due to second dependency argument being empty []
  useEffect(()=> {
    console.log("Hello World");
  },[]);

  console.log("Component rendered first");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={()=> setValue(value+1)}>
         Click Me
      </button>
    </>
  )
};

export default UseEffectBasics;
