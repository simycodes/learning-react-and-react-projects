import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  const [cart, setCart] = useState(0);

  // useCallback around function ensures function only re-creates/re-renders when its
  // dependency changes and not when other state variables change causing component to
  // re-render and making function again to re-create and re-render
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  },[cart]);

  // Defining and using useMemo - useMemo here is catching a value from a function
  // once cached, the cached value (mostExpensive) can be used in other processes
  const mostExpensive = useMemo(() => calculateMostExpensive(products), [products,])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={ {marginTop:'3rem'} }>cart: {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

// IMPLEMENTING react.memo hook here - this stops sub components from re-rendering 
// React.memo will not catch actual changes in function props - hence wrapping useCallBack()
// when functions/handlers are defined in the parent component
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(()=> {
    console.log("BigList is called");
  });

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(()=> {
    console.log("SingleProduct is called");
  });

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}

export default Index
