import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    let shipping = 0;
    if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }
    const grandTotal = (total + shipping).toFixed(2);
    return (
        <div>
            <h3>order summary</h3>
            <p>Items Ordered {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;