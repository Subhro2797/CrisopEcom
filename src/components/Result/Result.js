import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { ProductContext } from '../../Contexts/ProductsProvider';

const Result = (props) => {
    const { image, category, title, price, description, rating } = props.resultedProduct;
    const { handleAddtoCart } = useContext(ProductContext);
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
                <button onClick={handleAddtoCart} className='addtocart-btn'>Add to Cart</button>



            </Col>
        </Row>
    );
};

export default Result;