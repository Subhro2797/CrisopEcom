import React, { createContext, useEffect, useState } from 'react';
import { addtolocalstorage, deletetheStoredCart, getStoredCart, removetheDb } from '../utilities/addToLocalStorage';
import { addWishlistToLocalStorage, getWishList } from '../utilities/addWishListToLocalStorage';


export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    // const [color, setColor] = "blue";



    useEffect(() => {
        const storedCart = getStoredCart();
        setCart(storedCart);
    }, [])

    useEffect(() => {
        const storedWishList = getWishList();
        setWishlist(storedWishList);
    }, [wishlist.length])

    // useEffect(() => {
    //     const heartWishList = document.getElementsByClassName("heart-wishlist");
    //     heartWishList.color = color;
    // }, [color])

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
        // addToDb(selectedProduct.id, selectedProduct.title);
        addtolocalstorage(selectedProduct, selectedProduct.id, selectedProduct.quantity);
    }
    // const handleAddtoWishlist = (selectedProduct) => {
    //     let newWishlist = [];
    //     const searchProduct = products.find(product => product.id === selectedProduct.id);
    //     const prevProduct = wishlist.find(product => product.id === selectedProduct.id);
    //     if (searchProduct && !prevProduct) {
    //         newWishlist = [...wishlist, selectedProduct];
    //         setWishlist(newWishlist);
    //         addWishlistToLocalStorage(selectedProduct, selectedProduct.id, selectedProduct.quantity);

    //     }

    // }
    const handleAddtoWishlist = (selectedProduct) => {
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
        // addToDb(selectedProduct.id, selectedProduct.title);
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

    // const productsAndCartLoader = async () => {
    //     setLoading(true);
    //     try {
    //         const savedCart = getStoredCart();
    //         const initialCart = [];
    //         for (const id in savedCart) {
    //             const addedProduct = products.find(product => product.id === id);
    //             if (addedProduct) {
    //                 const quantity = savedCart[id];
    //                 addedProduct.quantity = quantity;
    //                 initialCart.push(addedProduct);
    //             }
    //         }
    //         setCart(initialCart);
    //     }
    //     catch (e) {
    //         setError(e.message);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }

    const productInfo = { products, cart, setCart, wishlist, setWishlist, handleAddtoWishlist, handleAddtoCart, handleRemovefromtheCart, clearCart };

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductsProvider;