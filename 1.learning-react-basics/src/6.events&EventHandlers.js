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
const books = [
  {
    id:1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth"
  },
  {
    id:2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91SukbcXCpL._AC_UL900_SR900,600_.jpg",
    title: "Verity",
    author: "Colleen Hoover"
  },
  {
    id:3,
    img: "https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL900_SR900,600_.jpg",
    title: "Ugly Love",
    author: "Colleen Hoover"
  },
  {
    id:4,
    img: "https://images-na.ssl-images-amazon.com/images/I/81PMOtoT7zL._AC_UL900_SR900,600_.jpg",
    title: "Fairy Tale",
    author: "Stephen King"
  }
];

function BookList() {
  return (
    <section className="book-list">
        {
          books.map((book) => {
            const {key, img, title, author} = book;
            return <Book key={key} img={img} title={title} author={author}></Book>
            //return <Book key={key} book={...book}></Book> //alternative of code above 1
            //return <Book key={key} book={book}></Book> //alternative of code above 2
            //return <Book key={book.key} img={book.img} title={book.title} author={book.author}></Book>
             //alternative of code above 3
          })
        }
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { img, title, author} = props;
  //const { img, title, author} = props. //alternative code 1
  //const { img, title, author} = props.books; //alternative code 2
  //const { img, title, author} = props. //alternative code 3
  //ADDING EVENTS TO A COMPONENT
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello Mate!");
  }
  const complexExample = (author) => {
     alert(author);
  }

  return(
    <article className='book' onMouseOver={() => {console.log(title)}}>
       <img src={ img } alt="This is a book" width="300px" />
       <h1 onClick={() => {alert(title)}}>{ title }</h1>
       <h4>{ author.toUpperCase() }</h4>

       <button type="button" onClick={clickHandler}>A reference event listener example Button</button>
       <button type="button" onClick={() => complexExample(author)}>Event Handler with an Argument</button>
    </article>
  )
}

//Rendering the BookList Component
ReactDom.render(<BookList/>, document.getElementById('root'));