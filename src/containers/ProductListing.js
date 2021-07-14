import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const ProductListing = ()=> {
    const products = useSelector(state => state);
    console.log(products);
    return (
        <div className="container">
        <Product/>
        </div>
    )
}

export default ProductListing;