import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, category, price, stock, ratings, img } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='p-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Seller : {seller}</p>
                <p><small>Ratings : {ratings} star</small></p>
            </div>
            <button onClick={props.addCart} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;