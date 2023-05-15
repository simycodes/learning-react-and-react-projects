import React from 'react';
import PropTypes from 'prop-types';

// Getting the default image
import DefaultImage from  '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  // If the image is there, then get the image url
  const url = image && image.url;

  return (
    <article className='product'>
      {/* Using or operator-short circuit to provide default values for missing props values  */}
      
      <img src={url || DefaultImage} alt='name' />

      <p>{name}</p>
      <p>{price || 'Checking for price..'}</p>

      {/* Code below creates errors - can not be done */}
      {/* <img src={image.url || DefaultImage} alt='name' /> */}
    </article>
  )
};

// Props validators - if or operator is used for default values, then below code can be avoided
Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}

// Props default values - used in place of actual props - if actual props don't work

// Product.defaultProps = {
//   name: 'Default name',
//   price: 3.99,
//   image: DefaultImage, //image.url: DefaultImage, - this can not be done
// }


export default Product;

