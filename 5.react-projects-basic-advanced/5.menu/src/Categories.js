import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (
    <div className='btn-container'>
      {
        // the index is coming from the index of the list from the categories array
        categories.map((category, index)=>{
          return (
          <button type='button' key={index} className='filter-btn' onClick={()=>filterItems(category)}>
            {category}
          </button>
          )
        })
      }

    </div>
  )
};

export default Categories;
