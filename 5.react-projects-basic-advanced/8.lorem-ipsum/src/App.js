import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("Its Working");
      let numberOfParagraphs = parseInt(count);
      if(numberOfParagraphs <= 0){
        numberOfParagraphs = 1;
      }
      if(numberOfParagraphs > 8){
        numberOfParagraphs = 8;
      }
      // array slice returns new array 
      setText(data.slice(0,numberOfParagraphs));
      // The slice() method returns selected elements in an array, as a new array.
      // The slice() method selects from a given start, up to a (not inclusive) given end.
  }

  return (
    <section className='section-center'>
      <div className='topContent'>
        <h3><i>Simple and Quick lorem ipsum Generator</i></h3>

        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>
            paragraphs:
          </label>
          <input 
            type='text' 
            value={count} 
            onChange={(e) => setCount(e.target.value)}
            name='amount' 
            id='amount'
          />

          <button type="submit" className="btn">
            generate
          </button>

        </form>
      </div>
      

      {/* Displaying the text to the user */}
      <article>
        {
          text.map((item, index) => {
              return (
                <p key={index} className='dummyTextParagraph'>{item}</p>
              )
          })
        }

        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, elementum sagittis.
          elementum sagittis. Dapibus ultrices in iaculis nunc sed. Et ultrices neque ornare
         aenean euismod.
        </p> */}

      </article>
    
    </section>
  );
}

export default App;
