// THIS KEEPS THE REDUCER FUNCTION - HELPS IN SEPARATION OF CODE

// reducer is a method that takes in-converts the old state and then gives out a new state
// using an action argument. action - what is being done to the state variable passed in. The reducer is developer made.
export const reducer = (state, action) => {
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
