import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// allCategories holds all category's of food, but each category needs not be repeated
// so a menu of categories can be correctly be created and displayed without repetitions
const allCategories = ['all', ...new Set(items.map((item)=>{
  return item.category;
}))];
// new Set() method removes repeated items from a returned list making a list to have unique 
// values & returns items as objects hence the use of [] to make returned items into array 
// elements
// console.log(allCategories); //  = ['all', 'breakfast', 'lunch', 'shakes']

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  // Function to filter food items-categories - This function is passed to the categories
  // component so its functionality can be accessed there where it will be used
  const filterItems = (category) => {
    // If all food-category button is clicked
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    // If other food-items are clicked
    const newItems = items.filter((item)=>{
        if(item.category === category){
          return item;
        }
    });
    setMenuItems(newItems);

    //Same as code below
    // const newItems = items.filter((item)=> item.category === category);
    // setMenuItems(newItems);

  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems} />

      </section>

    </main>
  )
}

export default App;
