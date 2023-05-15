//importing/getting react into this document
import React from 'react';
import ReactDom from 'react-dom';
//ABOVE CODE SAME AS BELOW-IN FUNCTIONALITY
//const React = require('React');
//const ReactDom = require('react-dom');

const Message = () => {
  return(
      <h4>This is an empty paragraph!More words coming!</h4>
  )
}

function Greeting() {
  return (
    <div>
      {/* Two nested components inside the div component*/}
      <Person/>
      <Message/>
    </div>
  );
}

const Person = () => <h1>Legend Mule - Nesting Components Demonstration</h1>

ReactDom.render(<Greeting/>, document.getElementById('root'));