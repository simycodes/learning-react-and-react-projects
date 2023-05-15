import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// A useRef works like a getElementById(), its connects to an HTML element - Makes a copy 
// of an element in in HTML/JSX.
// useRef can be said to be a getElementByRef(); & ref being the useRef variable name, which
// will also hold the element connected to/referenced to.

const UseRefBasics = () => {
  const refContainer = useRef(null); // refContainer can now hold any entire element it is connected to
  const refDiv = useRef(null);       

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(refContainer.current);
      console.log(refContainer.current.value);

      console.log(refDiv.current);
      console.log(refDiv.current.innerHTML);
  }

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    // No need to put []-dependence on useEffect as the useRef variable refContainer does
    // not trigger a render hence there will be no re-render - unless if it was a useState variable
  });

  return <>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type='text' ref={refContainer}/>
        <button type="submit">Submit</button>
      </div>
    </form>

    <div ref={refDiv}>Hello World</div>
  </>;
};

export default UseRefBasics;
