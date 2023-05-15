import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function getLocalStorage () {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);

  const [editId, setEditId] = useState('');
  const [alert, setAlert] = useState({ show: false, msg:'', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Working!");
    if(!name) {
      // Check if the item entered is empty
      showAlert(true, 'danger','please enter a value');
    }
    else if(name && isEditing) {
      // Start the editing process of an item
      // deal with editing
      const newList = list.map((item) => {
          if(item.id === editId) {
            // main item id but change title to the newly edited one
            return {...item, title: name};
          }
      })
      setList(newList);

      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'Item Changed Successfully');
    }
    else {
      // Add new item to the list
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list, newItem]);
      showAlert(true, 'success', 'Item Added Successfully!');
      setName('');
    }
  }

  // Function responsible for displaying alerts - item added etc
  const showAlert = (show = false, type='', msg = '') => {
    setAlert({ show: show, type: type, msg: msg})
    // setAlert({ show, type, msg }) - ES6 - same as above code
  }

  // Function to clear all items in the list
  const clearList = () => {
    showAlert(true, 'success', 'All Items Cleared Successfully!');
    setList([]);
  }

  // Function to remove a single item from the list
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item Successfully Removed From List!');
    const newList =  list.filter((item) => {
        if(item.id !== id) {
          console.log(item);
          return item;
        }
    })
    setList(newList);
  }

  // Function to edit an item
  const editItem = (id) => {
    console.log("edit working");
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }

  // Setting up local storage
  useEffect(() =>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>

        {/* {alert.show && <Alert />} alert={alert} -- then use const Alert = ({alert}) => {} in Alert component */}
        {alert.show? <Alert {...alert} list={list} showAlert={showAlert}/>: null}
        {/* passing showAlert function so it can be called without arguments making it false so alert message gets removed */}
        
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text'
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className='grocery'
            placeholder='e.g ama eggs'
            />
          <button type='submit' className='submit-btn'>
            {isEditing? 'edit': 'submit'}
          </button>
        </div>
        
      </form>

      {
        list.length > 0 && (
          <div className="grocery-container">
           <List items={list} editItem={editItem} removeItem={removeItem}/>
           <button className="clear-btn" onClick={clearList}>
            clear items
           </button>
          </div>
        )
      }

     
    </section>
  )
}

export default App
