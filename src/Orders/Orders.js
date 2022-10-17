import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const { initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
      }

    return (
        <div className="shopContainer">
        <div className="ordersContainer">
          {
            cart.map(product => <ReviewItem 
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
            ></ReviewItem> )
          }
          {
            cart.length === 0 && <h2>No Items for Review. Please <Link to='/'>Shop More</Link> </h2>
          }
        </div>
        <div className="cartContainer">
          <Cart clearCart={clearCart} cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Orders;