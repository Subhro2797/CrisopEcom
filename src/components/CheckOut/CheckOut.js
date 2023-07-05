import React from 'react';
import './CheckOut.css';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { BsClipboard2Check } from "react-icons/bs";


const CheckOut = () => {
    const navigate = useNavigate();
    const handleRedirectToBilingPage = () => {
        navigate('/billing');
    }
    return (
        <div className='checkout-page-container'>
            <div className='checkout-page'>
                <h6 className='icon-section'>Customer Info <BsClipboard2Check ></BsClipboard2Check></h6>
                <Form className='mb-3' >

                    <input type="text" className='input-box' name='firstname' placeholder="first name" required />


                    <input type="text" className='input-box' name='lastname' placeholder="last name" required />


                    <input type="text" name='address' className='input-box' placeholder="Address" required />



                    <div className='zip-state-container'>
                        <input type="number" className='input-box me-3' name="zip-code" id="" placeholder='zip-code' />
                        <select className='input-box select-box ' name="State" id="cars">
                            <option value="dhaka">Dhaka</option>
                            <option value="khhulna">Khulna</option>
                            <option value="sylhet">Sylhet</option>
                            <option value="rangpur">Rangpur</option>
                        </select>
                    </div>
                    <input type='text' className='input-box' name="city" id="" placeholder='City' />

                </Form>
                <div className='billing-btn-container'>
                    <button type='submit' onClick={handleRedirectToBilingPage} className='billing-submit-btn' >Continue to Billing <FaArrowRight /></button>
                </div>
            </div>

        </div>

    );
};

export default CheckOut;