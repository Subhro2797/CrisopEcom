import React from 'react';
import './Category.css';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Category = () => {
    const categoryProducts = useLoaderData();

    return (

        <div className='all-product-section'>
            {
                categoryProducts.map((categoryProduct) => <Product product={categoryProduct}></Product>)
            }
        </div>
    );
};

export default Category;