import React from "react";
import "./Cart.css";
const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart){
    quantity = quantity + product.quantity
    total = total + product.price * product.quantity
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * .1).toFixed(2));
  let grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${parseInt(grandTotal)}</h5>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
