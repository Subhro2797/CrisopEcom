import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SIdebar.css';
const Sidebar = (props) => {
    const { sideBar, hideSideBar } = props;
    const [sideBarCategories, setSideBarCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setSideBarCategories(data))
    }, [])
    return (
        <>
            {/* <div className="nav-bar">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars></FaIcons.FaBars>

                </Link>
            </div> */}
            <nav className={sideBar ? 'nav-menu-active' : 'nav-menu'}>
                <li className=' '>

                    {/* <RxCross1 className='navbar-toggle' onClick={hideSideBar}></RxCross1> */}
                    <p className='navbar-toggle' onClick={hideSideBar}>X</p>

                </li>
                <ul className='nav-menu-items'>

                    {
                        sideBarCategories.map((category, index) => {
                            return (

                                <li key={index} className='nav-text'><Link to={`category/${category}`} className='nav-menu-title'>
                                    {category}</Link></li>
                            )
                        }
                        )}

                </ul>
            </nav>
        </>
    );
};

export default Sidebar;