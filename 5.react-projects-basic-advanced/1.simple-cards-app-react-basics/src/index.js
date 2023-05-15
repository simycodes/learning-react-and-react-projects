//importing/getting react into this document
import React from 'react';
import ReactDom from 'react-dom';
//ABOVE CODE SAME AS BELOW-IN FUNCTIONALITY
//const React = require('React');
//const ReactDom = require('react-dom');

//connect to the internet to see results in browser

//Importing CSS
import './index.css';
//importing object variables to be used in the components - this is a named import/export
import {books} from "./books";
//importing the book component - this is a default export - -Book- name can be changed
import Book from "./Book";


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


//Rendering the BookList Component
ReactDom.render(<BookList/>, document.getElementById('root'));