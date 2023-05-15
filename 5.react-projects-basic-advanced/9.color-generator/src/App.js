import React, { useState } from 'react'
import SingleColor from './SingleColor'

// values.js library is used to make tints and shades of a given color
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#F15025').all(10)); // increase the number 10 and to get more shades

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Working!');

    try {
      // get tints and shades of based on color entered by user - using Values().all(); method
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    }
    catch(error){
      setError(true);
      console.log(error);
    }

  }

  return (
    <>
     <section className='container'>
      <h3>shades & tints color generator</h3>

      <form onSubmit={handleSubmit}>
        <input type='text'
         value={color} 
         onChange={(e)=>
         setColor(e.target.value)} 
         placeholder='#F15025'
        // className={`${error}?'error':null`}
         className={error?'error':null}
        />
        <button className='btn' type='submit'>
          submit
        </button>
      </form>

     </section>

     <section className='colors'>
      {
        list.map((color, index) => {
            console.log(color);

            return (
              <SingleColor 
              key={index} 
              {...color} 
              index={index} 
              hexColor={color.hex}
              />
            )
        })
      }
     </section>
    </>
  )
}

export default App
