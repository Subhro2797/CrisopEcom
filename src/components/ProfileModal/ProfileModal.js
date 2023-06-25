import React, { useContext, useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import { GrFormClose } from "react-icons/gr"
import LogIn from '../LogIn/LogIn';
import SignUp from '../SignUp/SignUp';

import './ProfileModal.css';
import { AuthContext } from '../../Contexts/AuthProvider';


const ProfileModal = (props) => {
    const { user, logOut } = useContext(AuthContext);
    const { onHide } = props;
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
        setShowLogin(false);
    }
    return (

        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='d-flex justify-content-end cross-button-holder'>
                <p className='rounded-start cross-button' onClick={onHide}><GrFormClose></GrFormClose></p>
            </div>
            <>
                {/* <Link onClick={showSignUp}>Sign Up</Link>
                <Link onClick={showLogin}>Log In </Link> */}
                {
                    user?.uid
                        ?
                        <div className='d-flex justify-content-center align-items-center'>
                            <button onClick={handleLogOut} className='logout-button'>Log Out</button>
                        </div>
                        :
                        <div className='d-flex justify-content-center '>

                            <button className='login-button' onClick={() => { setShowSignUp(true); setShowLogin(false) }}>Signup</button>
                            <button className='signup-button' onClick={() => { setShowLogin(true); setShowSignUp(false) }}>Login</button>

                        </div>




                }




                {/* <div>
                    <Link to='/login' className='login-button' onClick={() => { setShowLogin(true); setShowSignUp(false) }}>Log In </Link>
                </div> */}

            </>
            <Modal.Body>
                {

                    showSignUp && <Modal.Body><SignUp></SignUp></Modal.Body>
                }
                {
                    showLogin && <Modal.Body><LogIn></LogIn> </Modal.Body>
                }
            </Modal.Body>




            {/* {
                showSignUp ?
                    <Modal.Body><SignUp></SignUp></Modal.Body>
                    :
                    <Modal.Body><LogIn></LogIn></Modal.Body>
            } */}

        </Modal >
    );
};

export default ProfileModal;