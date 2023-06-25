import React, { useContext, useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main/Main';
import Home from '../components/Home/Home';
import LogIn from '../components/LogIn/LogIn';
import SignUp from '../components/SignUp/SignUp';
import Shop from '../components/Shop/Shop';
import Category from '../components/Category/Category';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import { productsAndCartLoader } from '../Loaders/productsAndCartLoader';
import Orders from '../components/Orders/Orders';
import { ProductContext } from '../Contexts/ProductsProvider';
import PCLoader from '../Loaders/PCLoader';
import PrivateRoute from './PrivateRoute';
import ProfileModal from '../components/ProfileModal/ProfileModal';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/CrisopEcom/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:category',
                element: <Category></Category>,
                loader: ({ params }) => {
                    return fetch(`https://fakestoreapi.com/products/category/${params.category}`);
                }

            },
            {
                path: '/products/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => {
                    return fetch(`https://fakestoreapi.com/products/${params.id}`);
                }

            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    }

]);



