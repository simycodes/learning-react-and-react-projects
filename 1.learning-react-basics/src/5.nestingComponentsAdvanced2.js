//importing/getting react into this document
import React from 'react';
import ReactDom from 'react-dom';
//ABOVE CODE SAME AS BELOW-IN FUNCTIONALITY
//const React = require('React');
//const ReactDom = require('react-dom');

//connect to the internet to see results in browser

//Importing CSS
import './index.css';

//Object variables to be used in the components
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth"
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg",
  title: "Verity",
  author: "Colleen Hoover"
}


function BookList() {
  return (
    <section className="book-list">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}> 
           {/* children component */}
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum libero 
            velit eveniet ducimus praesentium, quaerat soluta molestiae sint. Vel, id!
          </p>
      </Book> 
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/> 
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;
  return(
    <article className='book'>
       <img src={ img } alt="This is a book" width="300px" />
       <h1>{ title }</h1>
       <h4>{ author.toUpperCase() }</h4>
       {children}
       {/* {console.log(props)} */}
    </article>
  )
}

//Rendering the BookList Component
ReactDom.render(<BookList/>, document.getElementById('root'));