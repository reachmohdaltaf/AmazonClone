import Navbar from "../Navbar/Navbar.jsx";
import Product from "../Home/Products/Product.jsx";
import sampleData from '../Home/Products/constants.js';
import { toast } from 'react-hot-toast';

const Fresh = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find(
        (item) => item.product_name === product.product_name
      );

      if (existingProduct) {
        existingProduct.quantity += 1; //yha pr mai quantity ko increase krdunga 1 se
      } else {
        updatedCart.push({ ...product, quantity: 1 }); //agr item product name != product name to usko update krunga or uski default quantity 1 rakhunga
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart)); //yha pr local sotarage mai save krlete hai 
      return updatedCart;
    });

    toast.success("Product added to cart"); //ye to loader hai
  };

  return (
    <div className="fresh">
      <Navbar cart={cart} />
      <div className="bg-white flex items-center justify-center">
      {/* cart or addcart pass krdetahun */}
        <Product cart={cart} addToCart={addToCart} data={sampleData} />
      </div>
    </div>
  );
};

export default Fresh;
