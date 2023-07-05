import React, { createContext, useEffect, useState } from 'react';
import { addtolocalstorage, deletetheStoredCart, getStoredCart, removetheDb } from '../utilities/addToLocalStorage';
import { addWishlistToLocalStorage, getWishList } from '../utilities/addWishListToLocalStorage';


export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);




    useEffect(() => {
        const storedCart = getStoredCart();
        setCart(storedCart);
    }, [])


    useEffect(() => {
        const storedWishList = getWishList();
        setWishlist(storedWishList);
    }, [wishlist.length])



    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])



    const handleAddtoCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addtolocalstorage(selectedProduct, selectedProduct.id, selectedProduct.quantity);
    }

    const handleAddtoWishlist = (selectedProduct, clicked) => {

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...wishlist, selectedProduct];

        }
        else {
            const rest = wishlist.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setWishlist(newCart);
        addWishlistToLocalStorage(selectedProduct, selectedProduct.id, selectedProduct.quantity);
    }

    const handleRemovefromtheCart = (selectedProduct) => {
        let newCart = [];
        const removedProduct = cart.find(product => product.id === selectedProduct.id);
        if (removedProduct) {
            selectedProduct.quantity -= 1;
            if (selectedProduct.quantity === 0) {
                var index = cart.indexOf(removedProduct);
                delete cart[index];
                const rest = cart.filter(product => product.id !== selectedProduct.id);
                newCart = [...rest];
            }


        }
        setCart(newCart);
        removetheDb(selectedProduct);


    }
    const clearCart = () => {
        setCart([]);
        deletetheStoredCart();
    }



    const productInfo = { products, cart, setCart, wishlist, setWishlist, handleAddtoWishlist, handleAddtoCart, handleRemovefromtheCart, clearCart };

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;