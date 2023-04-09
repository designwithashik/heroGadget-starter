import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import CartItem from './components/Cards/CartItem'
import Cart from './components/Cart'
import { productsAndCartData } from './loaders/getCartAddedProductData'
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: productsAndCartData,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/cart',
                element: <Cart />,
                loader: productsAndCartData
                
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster/>
        <RouterProvider router={router}></RouterProvider>
    </>
)
