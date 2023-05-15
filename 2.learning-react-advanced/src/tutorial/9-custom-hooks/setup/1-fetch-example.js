import React, { useState, useEffect } from 'react'

// Importing the custom hook - useFetch
import { useFetch } from './2-useFetch'

// url to use in fetching data
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  // Getting & Destructuring  a common hook - custom hooks always start with use
  // This custom hook useFetch return an object { loading, products}
  // Destructuring an object returned from useFetch(url) custom hook, not an array
  const { loading, products } = useFetch(url); 
  // const data = useFetch(url); // same as code above
  
  console.log(products);

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      {/* <h2>{data.loading ? 'loading...' : 'data'}</h2> */}
    </div>
  )
}

export default Example
