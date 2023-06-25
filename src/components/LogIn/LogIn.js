import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';

const LogIn = () => {
    const { logIn, user } = useContext(AuthContext);
    console.log(user);

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully Logged In");
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <button className='submit-button' type="submit">
                    Submit
                </button>
            </div>
            <Toaster></Toaster>
        </Form>
    );
};

export default LogIn;