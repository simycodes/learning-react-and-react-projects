//importing/getting react into this document
import React from 'react';
import ReactDom from 'react-dom';
//ABOVE CODE SAME AS BELOW-IN FUNCTIONALITY
//const React = require('React');
//const ReactDom = require('react-dom');



function BookList() {
  return (
    <section>
      This is a book list!

    {/* many instances of the book are displayed.Changes in component occurs in all instances */}
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
      This is a book
    </article>
  )
}


ReactDom.render(<BookList/>, document.getElementById('root'));