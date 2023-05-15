import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const [messageSent, isMessageSent] = useState(false);

  const message = "Details Submitted Successfully";

 const handleSubmit = (e) => {
    e.preventDefault(); // form refreshes page after each submit, stop this effect
    console.log("Form Submitted!")
    // console.log(`${firstName}, Email: ${email}`);

    if(firstName && email){
      // details present add to people array
      //  const person = {firstName: firstName, email: email}
      const person = {id: new Date().getTime().toString(), firstName, email}; //- same as code above
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      console.log(people);
    }

    setFirstName("");
    setEmail("");
    isMessageSent(true);
  }

 return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>

      {/* value property connected to useState variable - eg name
      onChange property connected to useState method - eg setName */}

        <div className="form-control">
          <label htmlFor='firstName'>Name : </label>
          <input type="text" 
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value) } 
            id="firstName" 
            name="firstName"/>
        </div>

        <div className="form-control">
          <label htmlFor='email'>Email : </label>
          <input type="text" 
           value={email} 
           onChange={(e)=> setEmail(e.target.value) }
           id="email" 
           name="email" />
        </div>

        <button type="submit">add person</button>
         {messageSent? message: ""}

      </form>

      {
        people.map((person, index) => {
          const {id, firstName, email} = person;
          return (
            <div className='item' key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
            </div>
          );
        })
        
      }

    </article>


    {/* <article>
      <form className="form">

        <div className="form-control">
          <label htmlFor='firstName'>Name : </label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className="form-control">
          <label htmlFor='email'>Email : </label>
          <input type="text" id="email" name="email" />
        </div>

        <button type="submit" onClick={handleSubmit}>add person</button>

      </form>
    </article> */}
  </>
};

export default ControlledInputs;
