import React, { useContext } from 'react';
import { deleteShoppingCart, getLocalData, removeFromDb } from '../utilities/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';

const Cart = () => {
    // const { cart } = useLoaderData();
    const [cart, setCart] = useContext(CartContext)
    // let cart = [] 
    // const savedCart = getLocalData('shopping-cart')
    // for (const productID in savedCart) {
    //     const foundProduct = productsData.find(product => product.id === productID)
    //     if (foundProduct) {
    //         foundProduct.quantity= savedCart[productID]
    //     cart.push(foundProduct)
    //     }

    // }
    const orderHandler = () => {
        if (cart.length) {
            setCart([]);
            deleteShoppingCart();
            return toast.success('Congratulations!! Order is Placed')
        }
        else {
            toast.error('Cart is empty! ')
        }
    }

    const handleClearCart = () => {
        if (cart.length) {
            setCart([]);
            deleteShoppingCart();
            return toast.success('All Items Removed')
        }
        else {
            toast.error('Cart is empty! ')
        }
    }


    let total = 0;
    if (cart.length) {
        for (const product of cart) {
            total = total + product.price * product.quantity
        }
    }
    const removeFromDB = id => {
        const remaining = cart.filter(product => product.id !== id);
        removeFromDb(id)
        setCart(remaining)
        toast.error('Product is removed');

    }
    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold '>{cart.length ? 'Review Cart Items' : 'Cart is Empty'}</h2>
                
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {cart.map(product=><CartItem removeFromDB={removeFromDB} key={product.id} product={product}></CartItem>)}

                </ul>
                <div className="flex flex-col text-end">
                    <h2 className='font-bold text-md'>Total Amount: {total}$</h2>
                    <p className='text-gray-500'>Note : Not including vat & shipping cost</p>
                </div>
                <div className="flex space-x-4 justify-end">
                    {cart.length? (<button className='btn-primary' onClick={handleClearCart}>Clear Cart</button>): (<Link to='/shop'><button className='btn-primary'>Back To Shop</button></Link>)}
                    <button className='btn-outlined' onClick={orderHandler} >Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;