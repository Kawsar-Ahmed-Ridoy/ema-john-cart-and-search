import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

const handleAddToCart = (product)=> {
    const newCart = [...cart, product];
    setCart(newCart)
}

    return (
        <div className='shopContainer'>
            <div className='productContainer'>
               {products.map(product => <Products 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Products>)}
            </div>
            <div className='cartContainer'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;