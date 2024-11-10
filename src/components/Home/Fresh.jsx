// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Navbar/Navbar";
import Product from "./Products/Product";
import sampleData from "./Products/constants.js";
import './Fresh.css'
const Fresh = () => {
  const selectedProduct = sampleData;
  return (
    <div className="fresh">
      <Navbar />
      <Product data={selectedProduct} />
    </div>
  );
};

export default Fresh;
