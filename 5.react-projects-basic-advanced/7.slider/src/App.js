import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] =  useState(data);
  const [index, setIndex] =  useState(0);

  // Use effect to have the correct people index with data when array is in negatives or finished
  useEffect(()=>{
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  },[index,people]);

  useEffect(()=>{
    // This will cause a continuous calling of this useEffect and will cause errors of the
    // display of the articles, this useEffect will need a clean up function to stop this
    let slider = setInterval(()=>{
      setIndex(index + 1);
    }, 4000);
    // The clean up function - return it
    return ()=> clearInterval(slider);
  },[index]);

  return (
    <section className='section'>

      <div className='title'>
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>

      <div className='section-center'>
        {
          // personIndex is index obtained from the map as it loops through the list people
          // personIndex is the index of person argument passed as an array element
          people.map((person, personIndex)=>{
              const {id, image, title, quote, name} = person;
              // Setting up the article to display and move
              // place all articles(person object) created from the loop to the right
              let position = 'nextSlide';
              // If the article being displayed has index equal to index state variable
              // display that article - don't move it to the right
              if(personIndex === index){
                // Place person with index 0 on middle so it can be displayed
                position = 'activeSlide';
              }
              // place the last/previous active article on the left so current can be alone on middle
              if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                position =  'lastSlide';
              }

              return (
                // position class is moving all articles to the right except two articles
                <article className={position} key={id}>
                    <img src={image} alt={title} className='person-img' />
                    <h4>{name}</h4>
                    <p className='title'>{title}</p>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon' />
                </article>
              )
          })
        }

        <button className='prev' onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={()=> setIndex(index + 1)}>
          <FiChevronRight />
        </button>

      </div>
    </section>
  )
   
}

export default App;
