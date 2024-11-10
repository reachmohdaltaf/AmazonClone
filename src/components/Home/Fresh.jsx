// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Navbar/Navbar";
import Product from "./Products/Product";
import sampleData from "./Products/constants.js";
const Fresh = () => {
  const selectedProduct = sampleData;
  return (
    <div>
      <Navbar />
      <Product data={selectedProduct} />
      {console.log(selectedProduct)}
    </div>
  );
};

export default Fresh;
