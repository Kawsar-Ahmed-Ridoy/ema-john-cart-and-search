import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'
const Products = (props) => {
    const {product, handleAddToCart} = props
    const {name, img, seller, price, ratings} = product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='productInfo'>
            <p className='productName'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;