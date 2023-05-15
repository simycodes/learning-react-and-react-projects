import React, { useState } from 'react';

const UseStateObject = () => {
  const[people, setPeople] = useState({
    name:"Simy",
    age:20,
    message:"Random Message"
  })
  console.log(people);

  const changeMessage = () => {
    // This changes entire object into Hello World,hence nothing even gets to be displayed.
    // We want to change just a specific property of the object and not removing the object
    // setPeople("Hello World"); //hence use code below with spread operator
    // setPeople({name:"simy",age:"200", message: "Hello World"});
    setPeople({...people, message: "Hello World"});

    // setPeople() is equivalent to useState() method used in defining setPeople useState
    // ...people - copies values from the object people in its last state
    // An alternative to changing each property of the object is to set a useState
    // variable and function for name, age and the message - takes more work and time
  }

  return(
    <>
    <h3>{people.name}</h3>
    <h3>{people.age}</h3>
    <h3>{people.message}</h3>

    <button onClick={changeMessage} className="btn">
      Change Message
    </button>
    </>
  )
};

export default UseStateObject;
