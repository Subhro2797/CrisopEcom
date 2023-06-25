import React from 'react';
import './ReviewItem.css';
import { FaTrashAlt } from 'react-icons/fa';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, name, price, quantity, image } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveFromCart(id)} className='delete-btn'>
                        {/* <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon> */}
                        <FaTrashAlt className='delete-icon'></FaTrashAlt>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;