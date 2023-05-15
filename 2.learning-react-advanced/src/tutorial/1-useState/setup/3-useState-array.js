import React from 'react';
import { data } from '../../../data';
// data is an array of objects - 4 objects


const UseStateArray = () => {
  const[people, setPeople] = React.useState(data);
  const removeItem = (id) => {
      // let newPeople = people.filter((person) => person.id !== id);
      let newPeople = people.filter((person) => {
        if(person.id !== id){
          return person;
        }
      })
      setPeople(newPeople);
  }  

  return (
    <>
    {
      people.map((person) => {
        // console.log(person);
        // const {id, name} = person;
        const id = person.id;
        const name = person.name;
        return (
          // key always needed as a prop-argument for lists to work well
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={()=> removeItem(id)}>
              Remove
            </button>
          </div>
        )
      })
    }

     {/* without putting setPeople() in return call back function,the onClick calls itself
      without waiting for the onClick event because setPeople is called with an argument
      (empty array) that makes a direct function call without waiting to be triggered */}
     <button className="btn" onClick={()=> setPeople([])}>
          Clear Items
    </button>
    </>
  )
};

export default UseStateArray;

// NOTE
// the return body of map function used inside of the return body of a component
// does not use {} as in return{} but uses () as in return() just as the return of the 
// component does.This applies to similar methods such as filter ,sort and forEach
