import React, { useState } from 'react';
// Don't use if-else but OR,AND and ternary operators inside return() of components
// Use if-else outside of the components return(),and place various returns in each if-else
// short-circuit evaluation - || and && operators
// ternary operator - ? : operator

const ShortCircuit = () => {
  const [text, setText] = useState("Peter");
  const [isError, setIsError] = useState(false);
  // Initialize to text if its set/true,else initialize to hello world
  const firstValue = text || 'hello world';
  // Initialize to hello world only when text is true/set
  const secondValue = text && 'hello world';

  return (
    <>
     <h1>{text || "Jon Doe"}</h1> 
     {isError && <h1>Error....</h1>}
     {isError? <p>There is an error..</p>:<p>No Error</p>}
     <button className='btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
     
     {/* Display Hello -text- only when text is set/true */}
     {text && <h1>Hello {text}</h1>}
     {/* {!text && <h1>Hello {text}</h1>} */}
     <h4>{firstValue}</h4>
     <h4>{secondValue}</h4>

     {/* THIS CANT BE DONE INSIDE A RETURN OF A COMPONENT */}
     {/* if(user){console.log(user} */}

    </>
  )
};

export default ShortCircuit;
