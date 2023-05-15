import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

import fetchErrorMessage  from './fetchErrorMessage'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  // Function to remove a disliked tour from the tour array
  // removeTour function is passed as an argument to the Tour component where the removing is done by clicking button
  const removeTour = (id) => {
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setLoading(false);
      setTours(tours);
    } 
    catch (error) {
      setLoading(false);
      // setFetchError(true);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchTours();
  },[])

  // DISPLAY THIS WHILE WAITING FOR FETCHED DATA
  if(loading){
    return (
      <main>
         <Loading />
      </main>
    )
  }

  if(tours.length === 0){
    return ( 
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>Refresh Tours</button>
        </div>
      </main>
    )
  }

  // DISPLAY THIS IF THERE IS A FETCH ERROR
  // if(fetchError){
  //   return (
  //     <main>
  //        <fetchErrorMessage />
  //     </main>
  //   )
  // }

  //DISPLAY THIS IF ALL GOES WELL - DEFAULT
  return (
     <main>
        <Tours tours={tours} removeTour={removeTour}/>
     </main>
  )

}

export default App
