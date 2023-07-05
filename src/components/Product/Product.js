import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
import { FaDollarSign, FaEye, FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Contexts/ProductsProvider';

const Product = (props) => {
    const { handleAddtoWishlist } = useContext(ProductContext);
    const { product, handleAddtoCart } = props;
    const { image, title, price, rating, id } = product;
    return (
        <Card className='individual-card'>
            <div className='image-container'>
                <Card.Img variant='top' className='image-section' src={image} />
            </div>
            <Card.Body className='title-container'>
                <p className='title-section'>{title}</p>
                <Card.Text className='d-flex justify-content-between'>
                    <p className='price'><FaDollarSign></FaDollarSign> {price}</p>
                    <p><FaEye className='mx-2'></FaEye>{rating.rate}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer  >


                <div className='footer-section'>
                    <button className='checkout-btn' ><Link to={`/products/${id}`}>Details</Link></button>
                    <FaRegHeart onClick={() => handleAddtoWishlist(product)} className='blue-heart-wishlist'></FaRegHeart>
                    {/* <button ref={wishlistRef} style={{ color: 'blue' }} onClick={() => handleAddtoWishlist(product)} className='heart-wishlist'>Love</button> */}

                </div>
                <button className='addtocart-btn' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
            </Card.Footer>
        </Card>
    );
};

export default Product;