import React, { useContext, useEffect, useState } from 'react';
import { FaAngleDown, FaRecycle, FaRegHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import Form from 'react-bootstrap/form';
import './Header.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileModal from '../ProfileModal/ProfileModal';
import { AuthContext } from '../../Contexts/AuthProvider';
import Sidebar from '../Sidebar/Sidebar';
import { ProductContext } from '../../Contexts/ProductsProvider';
import SearchBar from '../SearchBar/SearchBar';
import Wishlist from '../Wishlist/Wishlist';

const Header = () => {
    const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => setCategories(data));
    // }, [])
    const [sideBar, setSideBar] = useState(false);
    const showSideBar = () => {
        setSideBar(true);
    }
    const hideSideBar = () => {
        setSideBar(false);
    }
    const { user } = useContext(AuthContext);
    const { cart, wishlist } = useContext(ProductContext);
    const [modalShow, setModalShow] = useState(false);
    const options = [
        { value: 'orange', lable: 'Orange' },
        { value: 'mango', lable: 'Mango' },
        { value: 'litchu', lable: 'Litchu' },
        { value: 'pear', lable: 'Pear' },
        { value: 'lemon', lable: 'Lemon' }

    ]



    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.error(error))
    // }

    return (
        <div className=''>




            <div className=' d-flex justify-content-between container align-items-center  mb-2' style={{ position: 'relative' }}>
                <div className='d-flex align-items-center'>
                    <Link to='/'>
                        <img className='brandlogo' src={`https://f8g8b9p5.rocketcdn.me/themes/crisop/wp-content/uploads/2023/02/crisoplogo.png`} alt="" />
                    </Link>

                </div>
                <Sidebar sideBar={sideBar} hideSideBar={hideSideBar}></Sidebar>

                {/* <div className='search-bar'>
                    </div> */}
                <div className='header-search-bar'>
                    <SearchBar></SearchBar>
                </div>

                {
                    user?.uid && <p className='user-name'>{user.displayName}</p>
                }
                <div className='icon-section d-flex justify-content-evenly align-items-center'>
                    <div className='w-100 cart-icon position-relative' >
                        <Link to='/orders' className=''>
                            <FaShoppingCart></FaShoppingCart></Link><span className="position-absolute  top-0 start-50 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                        {/* <p className='icon-text'>Cart</p> */}
                    </div>
                    <div className='w-100 position-relative'>
                        <Link to='/wishlist'>
                            <FaRegHeart></FaRegHeart></Link><span className="position-absolute top-0 start-50 wishlist-badge translate-middle badge rounded-pill bg-danger">
                            {wishlist.length}<span className="visually-hidden">unread messages</span>
                        </span> </div>
                    <div className='w-100'><FaRecycle></FaRecycle><p className=' icon-text'>Compare</p></div>


                    {/* <Link to='/profile'><FaUserAlt></FaUserAlt></Link> */}
                    <div >
                        <FaUserAlt onClick={() => setModalShow(true)} style={{ cursor: 'pointer', width: '70px', height: '30px' }}></FaUserAlt>
                    </div>

                    {
                        modalShow && <ProfileModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        ></ProfileModal>
                    }

                </div>
            </div>
            <div className=' container' >
                <Row className='header-second-part'>
                    <Col className='d-flex justify-content-start align-items-center' style={{ paddingRight: '20px' }}>
                        <div className='category-dropdown'>
                            <span className='first-category-section dropdown-btn' onClick={showSideBar}>Categories </span>
                            <div className='dropdown-content'>
                                {
                                    categories.map((category, index) => <p key={categories[index]}>
                                        <Link to={`category/${category}`}>{category}</Link>
                                    </p>)
                                }
                            </div>

                        </div>
                        <div className='d-flex justify-content-around align-items-center header-second-part-middle-section'>

                            <Link to='/'>Home </Link>
                            <div className='shop-dropdown'>
                                <Link to='/shop' className='shop-dropdown-btn'>SHOP</Link>
                                <div className='shop-dropdown-content'>
                                    <Row>
                                        <Col className='shop-col'>
                                            <h6>CATALOG</h6>
                                            <Link>Link 1 </Link>
                                            <Link>Link 2</Link>
                                            <Link>Link 3</Link>
                                            <Link>Link 4</Link>
                                        </Col>
                                        <Col className='shop-col'>
                                            <h6>SHOP LAYOUTS</h6>
                                            <Link>Link 5</Link>
                                            <Link>Link 6</Link>
                                            <Link>Link 7</Link>
                                            <Link>Link 8</Link>
                                        </Col>
                                        <Col className='shop-col'>
                                            <h6>
                                                SHOP COLUMNS
                                            </h6>
                                            <Link>Link 9</Link>
                                            <Link>Link 10</Link>
                                            <Link>Link 11</Link>
                                            <Link>Link 12</Link>
                                        </Col>
                                        <Col className='shop-col'>
                                            <h6>
                                                HERO TYPES
                                            </h6>
                                            <Link> Link 13</Link>
                                            <Link> Link 14</Link>
                                            <Link> Link 15</Link>
                                            <Link> Link 16</Link>
                                        </Col>
                                        <Col className='shop-col'><h6>
                                            SHOP PAGES
                                        </h6>
                                            <Link>Link 17</Link>
                                            <Link>Link 18 </Link>
                                            <Link> Link 19</Link>
                                            <Link> Link 20</Link>
                                        </Col>
                                        <Col className='shop-col'><h6>
                                            SHOP PAGES
                                        </h6>
                                            <Link>Link 17</Link>
                                            <Link>Link 18 </Link>
                                            <Link> Link 19</Link>
                                            <Link> Link 20</Link>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            <Link to='/home'>Products</Link>

                        </div>
                    </Col>
                    <Col className='d-flex justify-content-between align-items-center call-location-discount-section'>
                        <div className='d-flex align-items-center' >
                            <Link className=' telephone-section d-flex '>
                                <i className='telephone-icon'><HiOutlinePhone></HiOutlinePhone></i>
                                <div className='telephone-section'>
                                    <span className='yellow-text'>Call Anytime</span>
                                    <span className='phone-number'>280 900 3434</span>
                                </div>
                            </Link>

                        </div>
                        <div className=''>
                            <span className='yellow-text'>Your Location</span>
                            <div className='header-location'>Select a location</div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>

                            <img src='https://f8g8b9p5.rocketcdn.me/themes/crisop/wp-content/themes/crisop/images/discount.png' alt="" />

                            <div className='discount-section'>
                                <span className='yellow-text'>Only this weekend</span>
                                <span>Super Discount <FaAngleDown></FaAngleDown></span>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>
        </div>
    );
};

export default Header;