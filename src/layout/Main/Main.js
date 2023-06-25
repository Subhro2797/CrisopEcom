import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav';
import RIghtSideNav from '../../components/RIghtSideNav/RIghtSideNav';
import Sidebar from '../../components/Sidebar/Sidebar';

const Main = () => {

    return (
        <>

            <div>

                <Header></Header>

                <Container className='my-3'>
                    <Row>
                        {/* <Col lg={3}>
                            <LeftSideNav></LeftSideNav>
                        </Col> */}

                        <Outlet></Outlet>
                    </Row>
                </Container>


            </div>
        </>

    );
};

export default Main;