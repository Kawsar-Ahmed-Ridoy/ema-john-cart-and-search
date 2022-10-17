import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const {products} = useLoaderData();
  const [cart, setCart] = useState([]);

  const clearCart = () =>{
    setCart([]);
    deleteShoppingCart();
  }

  useEffect(() => {
    const storedCart = getStoredCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
console.log(products);
  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map(product => 
          <Products
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Products>
        )}
      </div>
      <div className="cartContainer">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to='orders'>
            <button>Review Order</button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
