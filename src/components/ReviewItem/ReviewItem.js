import React from 'react';
import './ReviewItem.css';
import { FaTrashAlt } from 'react-icons/fa';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, title, price, quantity, image } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p><i>{title}</i></p>
                    <p><small>Price: <span className='review-item-info' >{price}</span></small></p>
                    <p><small>Quantity: <span className='review-item-info'>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveFromCart(product)} className='delete-btn'>
                        {/* <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon> */}
                        <FaTrashAlt className='delete-icon'></FaTrashAlt>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;