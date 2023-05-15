import React from 'react';

const ErrorExample = () => {
  let title = "Random Title";

  const handleClick = () => {
    // The title wont be changed by the code below as the needs to be re-rendered
    // in order for the changes to occur, hence the need to use useState method that 
    // helds trigger components to re-render so updates can happen automatically
    title = "Simy";
    console.log(title); // changes can be seen in the console though
  }

  return (
    <frameElement>
       <h2>{title}</h2>

       <button class="btn" onClick={handleClick}>
          Change Title
       </button>
    </frameElement>
  )
};

export default ErrorExample;
