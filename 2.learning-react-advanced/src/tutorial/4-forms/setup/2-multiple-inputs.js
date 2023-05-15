import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name  = e.target.name; // name attribute in input element of form
    const value = e.target.value; // value attribute in input element of form
    console.log(name, value);
    setPerson( {...person, [name]: value} ); // ...person keeps old key value pairs as new one is being updated
    // [] bracket notation on object keys helps change object values dynamically,
    // // state.value ; // dot notation can not change object key values dynamically
    // putting name inside [] makes name as property of object to change values
    // of an object dynamically - changes object property to a dynamic property to dynamic updates
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age){
      const newPerson = {...person, id: new Date().getTime().toString()};
      setPeople([...people, newPerson]);
      setPerson({firstName:'', email:'', age:''});
    }

  }

  return (
    <>
      <article>

        <form className='form'>

          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>

          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}

      </article>
    </>
  );
};

export default ControlledInputs;
