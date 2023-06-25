import React, { useContext } from 'react';
import { ProductContext } from '../Contexts/ProductsProvider';
import { getStoredCart } from '../utilities/addToLocalStorage';


const PCLoader = () => {
    const products = useContext(ProductContext);

    //get cart 
    const savedCart = getStoredCart();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return { products, initialCart };
};

export default PCLoader;