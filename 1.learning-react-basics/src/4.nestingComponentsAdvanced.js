//importing/getting react into this document
import React from 'react';
import ReactDom from 'react-dom';
//ABOVE CODE SAME AS BELOW-IN FUNCTIONALITY
//const React = require('React');
//const ReactDom = require('react-dom');

//connect to the internet to see results in browser

function BookList() {
  return (
    <section>
      This is a book list!
      <Book/> 
      <Book/> 
      <Book/> 
      <Book/> 
    </section>
  );
}

const Book = () => {
  return(
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

//Sub/Inner components that make up the book component
const Image = () => {
  return(
    <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg" alt="This is a book" width="300px" />
  )
}

const Title = () => <h1>I Love You to the Moon and Back</h1>

const Author = () => {
  return <h4>Amelia Hepworth</h4>
}

//Rendering the BookList Component
ReactDom.render(<BookList/>, document.getElementById('root'));