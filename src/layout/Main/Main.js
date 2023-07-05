import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';
import { ProductContext } from '../../Contexts/ProductsProvider';


const Main = () => {



    return (
        <>
            <div>
                <Header></Header>
                <Container className='my-3'>
                    <Row>
                        <Outlet></Outlet>
                    </Row>
                </Container>


            </div>
        </>

    );
};

export default Main;