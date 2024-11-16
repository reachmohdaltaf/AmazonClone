// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Product from "../Home/Products/Product.jsx";
import sampleData from '../Home/Products/constants.js'

const Fresh = () => {






  const selectedProduct = sampleData;
  return (
    <div className="fresh  " >
      <Navbar/>
      <div className="">
      <Product data={selectedProduct} />
      </div>
    </div>
  );
};

export default Fresh;
