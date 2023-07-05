import React, { useContext } from 'react';
import './SingleProduct.css';
import { useLoaderData } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { ProductContext } from '../../Contexts/ProductsProvider';

const SingleProduct = () => {
    const productInfo = useLoaderData();
    const { handleAddtoCart } = useContext(ProductContext);
    const { image, id, description, category, price, title, rating } = productInfo;
    return (
        <Row className='product-container'>
            <Col>
                <img src={image} className='image-info' alt="" />
            </Col>
            <Col className='text-start'>
                <div className='d-flex justify-content-end '>
                    <h6 className='type-of-category'>{category}</h6>
                </div>
                <h4>{title}</h4>
                <p className='price-section'>Price:{price}</p>
                <h6>Specifications: </h6>
                <p>{description}</p>
                <h6>Rating:{rating.rate} <FaStar style={{ color: 'orange', marginLeft: '5px' }} /></h6>
                <button onClick={() => handleAddtoCart(productInfo)} className='addtocart-btn'>Add to Cart</button>



            </Col>
        </Row>
    );
};

export default SingleProduct;