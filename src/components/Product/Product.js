import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddTocart, product } = props
    const { name, price, img, seller, ratings, } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product_info">
                <p className='product_name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddTocart(product)} className='btn_cart'>
                <p className='btn_text'>Add to Cart</p>
                <p><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;