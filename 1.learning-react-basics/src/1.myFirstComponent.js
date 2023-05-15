//importing/getting react into this document
import React from 'react';
import ReactDom from 'react-dom';
//ABOVE CODE SAME AS BELOW-IN FUNCTIONALITY
//const React = require('React');
//const ReactDom = require('react-dom');

function Greeting() {
  return (
    <div>
      <h4>This is my first component</h4>
      <button OnClick="changeColor()" className="btnColor">
         Click Me
      </button>
      <img src="" alt="" />
      <br></br>
      <input type="text" />
    </div>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));