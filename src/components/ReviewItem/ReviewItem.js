import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css'
const ReviewItem = ({product, handleRemoveItem}) => {
    const {id, name, price, quantity, shipping, img} = product;
    return (
        <div className='reviewItem'>
           <div>
                <img src={img} alt="" />
           </div>
           <div className="reviewDetailsContainer">
                <div className="reviewDetails">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="deleteContainer">
                    <button onClick={()=>handleRemoveItem(id)} className='btnDelete'>
                        <FontAwesomeIcon className='deleteIcon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default ReviewItem;