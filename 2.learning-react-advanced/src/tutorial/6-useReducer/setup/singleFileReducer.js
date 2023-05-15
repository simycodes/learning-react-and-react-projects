import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';

// reducer is a method that takes in-converts the old state and then gives out a new state
// using an action argument. action - what is being done to the state variable passed in. The reducer is developer made.
const reducer = (state, action) => {
  // The reducer function contains custom state logic - used like a controller in MVC
  // reducer is responsible for updating all the possible useState variable - all happening in one function-place
  // Always return a state - else errors will occur and component wont work as needed
  // console.log(state, action);
  if(action.type === 'ADD_ITEM'){
    const newPeople = [...state.people, action.payload];
    return {
      ...state, 
      people: newPeople, 
      isModalOpen: true, 
      modalContent: 'Item Added',
      // ...state - brings old values while new updates are made - people: newPeople
    };
  }

  if(action.type === 'NO_VALUE'){
    return {
      ...state, 
      isModalOpen: true, 
      modalContent: 'Please Enter a Value',
    };
  }

  if(action.type === 'CLOSE_MODAL'){
    return {
      ...state, 
      isModalOpen: false, 
    };
  }

  if(action.type === 'REMOVE_ITEM'){
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return {
      ...state, 
      people: newPeople,
    };
  }

  // return state;
  throw new Error('No matching action type');
};

// Second argument of useReducer
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'Hello World',
}

const Index = () => {
  const [name, setName] = useState('');
  // Reducer is a method that takes in the old state and then gives out a new state. The
  // useReducer variable always uses reducer as an argument.And every task that a 
  // useReducer handles is done by the dispatch method via the useReducer argument.
  const [state, dispatch] = useReducer(reducer, defaultState);

  // state now is initialized/holds data of defaultState and to change anything in state is needs to be dispatched by the dispatch function
  // dispatch is always called with an object containing type property eg dispatch({type:'TESTING'})
  // reducer - group of actions to perform for each changing possible useState variables put inside defaultState object - dispatch calls reducer
  // defaultState - is an object that holds a group of possible useState variables as key-value properties

  // The reducer function contains custom state logic and the initialState can be a 
  // simple value but generally will  contain an object - holding all possible useState variables as object properties

  const handleSubmit = (e) => {
      e.preventDefault();
      if(name) {
        const newPerson = {id: new Date().getTime().toString(), name: name}
        dispatch({type: 'ADD_ITEM', payload: newPerson});
        setName('');
       // dispatch is always called with an object(action) containing type property
       // The value of type dictates the action-process to do with current state passed in
       // the payload property carries the possible useState variable to process/store/change
       // dispatch is used to call the reducer function - or its an alias of the reducer method
      }
      else {
        dispatch({type: 'NO_VALUE'});
      }
  }

  const closeModal = () => {
      dispatch({ type: 'CLOSE_MODAL'})
  }

  return (
    <>

      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
        <button>Add</button>
      </form>

      {
        state.people.map((person) => {
          console.log(person.name);
          return (
            
            <div key={person.id} className="item">
              <h4>{person.name}</h4>
              <button onClick={() => dispatch({type: 'REMOVE_ITEM', payload: person.id})}>
                remove
              </button>
            </div>
          )
        })
      }

    </>
  )
};

export default Index;
