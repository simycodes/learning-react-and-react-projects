import { useState, useEffect, useCallback } from 'react';

// THIS CUSTOM HOOK - CAN BE CALLED IN OTHER COMPONENTS FOR ITS SERVICES - IT DOES NOT 
// RETURN ANY HTML/JSX - IT JUST PROVIDES ITS REPEATED LOGIC PROCESS NEEDED BY OTHER COMPONENTS
export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    // products can be named data since this custom hook can be generally used by many
    // different components

    const getProducts = useCallback(async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
    },[url]);

    useEffect(() => {
        getProducts()
    }, [url, getProducts])
    // console.log(products);

    return { loading, products}
    
};
