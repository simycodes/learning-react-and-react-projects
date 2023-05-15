import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

// Defining a context variable - using React.createContext;
// The context variable.provider is then used to pass props to sub components by
// just wrapping the parent-root component's return & accessing using useContext
const PersonContext = React.createContext();
// the context variable holds two components - Provider, Consumer - useContext 
// replaced it and its not part of useContext variable but independent hook
// the context variable will hold all props to be passed to sub components and will be
// accessed by useContext. Props initialized by useContext variable.provide value=""

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      {/* The prop to be passed to sub components are passed using the value property */}
      {/* PersonContext holds all props to be passed to sub components and will be accessed by useContext */}
      <PersonContext.Provider value={{removePerson, people}}>
        <h3>Context API / useContext - avoiding prop drilling</h3>
        <List />
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);
  console.log(people); // { people } is destructured, mainData is not destructured
  // Code below works as code above
  // const mainData = useContext(PersonContext);
  // console.log(mainData);
  // mainData.people.map((person)
  return (
    <>
      {
        people.map((person) => {
          return (
            <SinglePerson
              key={person.id}
              {...person}
            />
          );
        })
      }
    </>
  );
};

const SinglePerson = ({ id, name}) => {
  const { removePerson } = useContext(PersonContext);
  // console.log(removePerson);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
