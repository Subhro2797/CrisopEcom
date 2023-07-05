import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ProductContext } from '../../Contexts/ProductsProvider';
import './WishlistProduct.css';
import { ImCross } from "react-icons/im";
import Wishlist from '../Wishlist/Wishlist';
import { removeWishlistFromTheDb } from '../../utilities/addWishListToLocalStorage';
import { Link } from 'react-router-dom';

const WishlistProduct = (props) => {
    const { handleAddtoCart } = useContext(ProductContext);
    const { product, handleRemoveFromWishlist } = props;
    const { image, title, price, rating, id } = product;


    return (

        <Card className='individual-wishlist-card'>
            <div className='image-container'>
                <Card.Img variant='top' className='wishlist-product-image' src={image} />
            </div>
            <Card.Body className='title-container'>
                <p className='title-section'>{title}</p>
                <p className='title-section'>${price}</p>
            </Card.Body>
            <Card.Footer className='footer-section' >
                {/* <button className='addtocart-btn' onClick={() => handleAddtoCart(product)}>Add to Cart</button> */}
                <button className='checkout-btn' ><Link to={`/products/${id}`}>Details</Link></button>
                <button onClick={() => handleRemoveFromWishlist(product)} className='remove-Wishlist-btn-section'><span className='remove-wishlist-btn'><ImCross></ImCross></span></button>
            </Card.Footer>
        </Card>
    );
};

export default WishlistProduct;