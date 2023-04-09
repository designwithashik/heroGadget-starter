import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utilities/fakeDB';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    // const products = useLoaderData();
    const products = useContext(ProductContext)
    // console.log(products)
    const [cart, setCart] = useContext(CartContext)

    //Card Button Handler
    const handleAddToCart = clickedProduct => {
        let newCart = [];
        const exist = cart.find(product => product.id === clickedProduct.id);


        if (!exist) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== clickedProduct.id);

            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }

        toast.success('Product Added to cart');
        setCart(newCart)


        // console.log(id)
        addToDb(clickedProduct.id)
    }
    return (
        <div className='product-container'>
            {products.map((product) => {
                return (
                    <ProductCard handleAddToCart={handleAddToCart} product={product} key={product.id}></ProductCard>
               )
           })}
        </div>
    );
};

export default Shop;