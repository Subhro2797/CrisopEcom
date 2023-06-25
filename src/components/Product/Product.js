import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
import { FaDollarSign, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = (props) => {
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
                <button className='checkout-btn' ><Link to={`/products/${id}`}>Check Out</Link></button>
                <button className='addtocart-btn' onClick={() => handleAddtoCart(product)}>Add to Cart</button>
            </Card.Footer>
        </Card>
    );
};

export default Product;