import React from 'react';

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

export default Book;