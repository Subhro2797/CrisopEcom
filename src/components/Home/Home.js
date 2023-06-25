import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addtolocalstorage, getStoredCart, removetheDb } from '../../utilities/addToLocalStorage';
import { ProductContext } from '../../Contexts/ProductsProvider';


const Home = () => {
    const { products, cart, setCart, handleRemovefromtheCart, clearCart } = useContext(ProductContext);
    // const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     setCart(storedCart);
    // }, [products])

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


    return (
        <div className='shop-container'>
            {/* <Categories categories={categories}></Categories> */}
            {/* <h3>The total no. of products: {allProducts.length}</h3> */}
            <div className='all-product-section'>
                {
                    products.map(product => <Product product={product} handleAddtoCart={handleAddtoCart} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                {
                    <Cart cart={cart} clearCart={clearCart}>
                        {/* <Link to='/orders'>
                        <button className='common-btn'>Review Order</button>
                    </Link> */}
                    </Cart>
                }

            </div>
        </div>
    );
};

export default Home;