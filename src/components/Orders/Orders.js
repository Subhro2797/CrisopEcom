import React, { useContext } from 'react';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { ProductContext } from '../../Contexts/ProductsProvider';
import { removetheDb } from '../../utilities/addToLocalStorage';



const Orders = () => {
    const { cart, setCart, clearCart } = useContext(ProductContext);


    // const productsAndCartLoader = async () => {
    //     setLoading(true);
    //     const savedCart = getStoredCart();
    //     const initialCart = [];

    //     for (const id in savedCart) {
    //         const addedProduct = products.find(product => product.id === id);
    //         if (addedProduct) {
    //             const quantity = savedCart[id];
    //             addedProduct.quantity = quantity;
    //             initialCart.push(addedProduct);
    //         }
    //     }

    //     return  initialCart;



    // }

    const handleRemoveFromCart = (collection) => {
        const remaining = cart.filter(product => product.id !== collection.id);
        setCart(remaining);
        removetheDb(collection);
    }
    return (
        <div>
            <div className='shop-container'>
                <div className='orders-container'>
                    {
                        (cart.length > 0) ? cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        ></ReviewItem>) : <div className='nothing'><h1>There is nothing in the cart. Please <Link to='/'>Shop more</Link></h1></div>
                    }


                </div>
                <div className='cart-container'>
                    <Cart clearCart={clearCart} cart={cart}>
                        <Link to='/shipping'><button className='common-btn'>Proceed to Shipping</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;