import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0);
  const reset = () => {
       setValue(0);
      // setValue(value = 0); //same as code above
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
    </>
  )
};

export default UseStateCounter;
