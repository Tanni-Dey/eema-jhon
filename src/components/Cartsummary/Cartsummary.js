import { faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cartsummary.css'

const Cartsummary = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + (product.price * quantity);
        shipping = shipping + (product.shipping * quantity);
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + Number(tax)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <p>Grand Total : ${grandTotal}</p>
            <button>Clear Cart</button>
        </div>
    );
};

export default Cartsummary;