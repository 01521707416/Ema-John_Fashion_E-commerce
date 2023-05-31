import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, Setproducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => Setproducts(data))
    }, [])

    const handleAddTocart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddTocart={handleAddTocart}
                    ></Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;