import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0);
  const reset = () => {
       setValue(0);
      // setValue(value = 0); //same as code above
  }

  const complexIncrease = () => {
        setTimeout(()=>{
          // code below changes the counter once even if clicked multiple times on the button
          // Hence the use of another call back function that does real automatic updates by remembering 
          // all the number of times the button is clicked - by getting the updated value inserted in button after
          // after 2 seconds
          // setValue(value + 1)
          setValue((prevState)=>{ return prevState + 1});
          // prevState represents the value having a current updated value
        },
        2000)
  }

  return (
    <>
      <section style={{ margin: "4rem 0"}}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={()=> setValue(value-1)}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={()=> setValue(value+1)}>Increase</button>
      </section>

      <section style={{ margin: "4rem 0"}}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  )
};

export default UseStateCounter;
