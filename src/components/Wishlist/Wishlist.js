import React, { useContext } from 'react';
import { ProductContext } from '../../Contexts/ProductsProvider';
import './Wishlist.css';
import WishlistProduct from '../WishlistProduct/WishlistProduct';
import { Link } from 'react-router-dom';
import { removeWishlistFromTheDb } from '../../utilities/addWishListToLocalStorage';

const Wishlist = () => {
    const { wishlist, setWishlist } = useContext(ProductContext);
    const handleRemoveFromWishlist = (collection) => {
        const remaining = wishlist.filter(product => product.id !== collection.id);
        setWishlist(remaining);
        removeWishlistFromTheDb(collection);
    }
    return (
        <div >
            <h5 className='wishlist-title'>My Wishlist</h5>
            <p className="wishlist-caption" >View favorite products you've saved to your wishlist</p>
            <div className='wishlist-section'>
                {
                    wishlist.map((product) => <WishlistProduct
                        product={product}
                        handleRemoveFromWishlist={handleRemoveFromWishlist}
                    ></WishlistProduct>)
                }
            </div>
            {
                wishlist.length === 0 && <p className='nothing'><h1>There is nothing in the cart. Please <Link to='/'>Shop more</Link></h1></p>
            }
        </div>
    );
};

export default Wishlist;