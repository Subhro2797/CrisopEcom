import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import './SignUp.css';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setSuccess(false);
        setPasswordError(false);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        console.log(name, email, password);

        if (password !== confirm) {
            setPasswordError(true);
            setPasswordErrorMessage('The password did not match');
            return;
        }
        if (password.length < 7) {
            setPasswordError(true);
            setPasswordErrorMessage("Password must be atleast 7 characters long");
            return;
        }

        if (password.length > 20) {
            setPasswordError(true);
            setPasswordErrorMessage("Password can not exceed more than 20 characters");
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError(true);
            setPasswordErrorMessage("Please add atleast one special character");
            return;
        }
        //creating user through registration with email and password
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                setPasswordError(false);
                form.reset();
                handleUpdateUserProfile(name);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    // const handleInstantCapture = (password, event) => {
    //     console.log(event.target.value);
    //     event.target.value = password;
    //     if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
    //         const isNumber = password.includes(Number);
    //         if (!isNumber) {
    //             setErrorMessage("Please Enter One digit");
    //             return;
    //         }
    //     }
    // }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' name='confirmPassword' placeholder='Confirm Password'></Form.Control>
            </Form.Group>
            {passwordError && <p className='text-danger'>{passwordErrorMessage} </p>}
            {/* <p className='text-danger'>{passwordErrorMessage}</p> */}
            <div className='d-flex justify-content-center'>
                <button className='submit-button ' type="submit">
                    Submit
                </button>
            </div>
            {success && <p className='text-success'>Successfully Registered</p>}
        </Form>
    );
};

export default SignUp;