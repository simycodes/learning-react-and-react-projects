import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  // Check if array index number is greater than array size or index is in negatives 
  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    if (number < 0){
      return people.length - 1;
    }
    return number;
  }

  // Function to get the next person - increase array index
  const nextPerson = () => {
    setIndex((index)=> {
      let newIndex = index + 1;
      // Check if array index is greater than array size or is in the negatives
      return checkNumber(newIndex);
      // The returned value (e.g 1), calls the setIndex() function and updates the index
      // value changing the array
    });
  }

  // Function to get the previous person - decrease array index
  const prevPerson = ()  => {
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  // Function to get the random person - random array index value
  const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      // Check if new random number is the same as the current-old random number used
      if(randomNumber === index){
        randomNumber =  index + 1;
      }
      setIndex(checkNumber(randomNumber));
  }

  return (
    <article className='review'>

      {/* Image holder */}
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      {/* Details section */}
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      {/* Buttons section */}
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

       <button className='random-btn' onClick={randomPerson}>
          suprise me
       </button>

    </article>
  )
};

export default Review;
