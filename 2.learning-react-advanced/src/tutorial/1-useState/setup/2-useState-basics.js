import React from 'react';
import { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState("Hello World"));

  // useCase takes 2 arguments(variable,handler function)& returns an array
  // The first argument can be an int,string,array,object etc
  const firstArgumentVariable = useState(1)[0];
  const secondArgumentFunction = useState(1)[1];
  console.log(firstArgumentVariable,secondArgumentFunction);

  // using destructuring to get values from useState()-usual coding way
  // text holds the value inside useState() which is Random Text
  let [text, setText] = useState("Random Text");

  const clickHandler = () => {
    // setText("Hello World!");
    if(text === "Random Title") {
      setText("Hello World");
    }
    else {
      setText("Random Title");
    }
  }

  return(
    <React.Fragment>
      <div className="container">
        <h1>{text}</h1>

        <button onClick={clickHandler} class="btn">
          Change Title
        </button>
      </div>
    </React.Fragment>
  )
};

export default UseStateBasics;

// NOTE
// useState() allows you to define and assign a variable & function and connect this 
// variable to the defined function that can easily access it and change it.
// this defination process happen immediately you assign an argument to a useState function
// like this useState("Hello World"),variable will hold Hello World and function will have
// access to this variable and this variable and function can be accessed through destructuring
// like this : let [text, setText] = useState("Hello World");


