import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Product from "../Home/Products/Product.jsx";
import sampleData from '../Home/Products/constants.js';

const Fresh = () => {
  const [cart, setCart] = useState(() => {
    // Load cart from local storage or initialize as empty
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const selectedProduct = sampleData;

  return (
    <div className="fresh">
      <Navbar cart={cart} />
      <div>
        {/* Pass cart and addToCart to the Product component */}
        <Product cart={cart} addToCart={addToCart} data={selectedProduct} />
      </div>
    </div>
  );
};

export default Fresh;
