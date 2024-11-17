import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cart={cart} />
      <div className="h-[200vh] pt-24 flex flex-col items-center justify-start px-4">
        <div className="cart-text font-bold text-5xl text-gray-800 mb-8">
          My Cart
        </div>
        <div className="cart-items w-full max-w-6xl bg-white rounded-lg shadow-xl p-6">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="cart-item flex justify-between py-4 px-6 bg-gray-50 border-b border-gray-200 hover:bg-gray-100 rounded-lg mb-4"
              >
                {/* Product Image */}
                <div className="cart-item-image w-1/4 flex-shrink-0">
                  <img
                    src={item.img_link}
                    alt={item.product_name}
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="cart-item-details w-3/4 pl-6 flex flex-col justify-between">
                  <p className="text-xl font-semibold text-gray-800">{item.product_name}</p>
                  <div className="product-pricing mt-2">
                    <p className="text-lg font-semibold text-green-600">{item.actual_price}</p>
                    <p className="text-sm text-gray-400 line-through">{item.discounted_price}</p>
                  </div>
                </div>

                {/* Remove Item Button (optional) */}
                <button className="remove-item text-red-500 hover:text-red-700 font-semibold text-sm">
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
          )}
        </div>
        <div className="w-full max-w-6xl mt-8 flex justify-between items-center">
          <div className="total-price text-xl font-bold text-gray-800">
            Total:{" "}
            <span className="text-green-600">
              ${cart.reduce((acc, item) => acc + parseFloat(item.actual_price.slice(1)), 0).toFixed(2)}
            </span>
          </div>
          <button className="checkout-btn bg-blue-500 hover:bg-blue-600 text-white py-3 px-10 rounded-lg font-semibold transition duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
