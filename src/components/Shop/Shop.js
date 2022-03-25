import React, { useEffect, useState } from 'react';
import { addToDb, getShopping } from '../../utilities/fakedb';
import Cartsummary from '../Cartsummary/Cartsummary';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShopping()
        const shoping = [];
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id)
            // addedProduct.quantity = storedCart[id]
            if (addedProduct) {
                addedProduct.quantity = storedCart[id];
                shoping.push(addedProduct)
            }
        }
        setCart(shoping);
    }, [products])
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            exist.quantity = exist.quantity + 1;
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, exist]

            // console.log(rest)

        }
        // console.log(selectedProduct)

        setCart(newCart)
        // console.log(cart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product => <Product addCart={() => handleAddToCart(product)} key={product.id} product={product}></Product>)
                }
            </div>
            <div className='orders'>
                <Cartsummary cart={cart}></Cartsummary>

                {/* {
                    cart.map(order => <Cartsummary order={order}></Cartsummary>)
                } */}
                {/* <p>Selected Items :{cart.length}</p>
                <p>Total Price : ${cart.price}</p> */}
            </div>
        </div>
    );
};

export default Shop;