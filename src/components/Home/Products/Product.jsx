// eslint-disable-next-line no-unused-vars
import React from "react";
import './Products.css'
const Product = ({ data }) => {
  console.log(data);
  return (
    <div className="container">
      
      
      
      {data.map((item, index)=>(
           <div className="product" key={index}>

            <div className="product-image"><img src={item.img_link} alt="" /></div>

            <div className="product-content">
              <div className="product-title"><p>{item.product_name}</p></div>
              <div className="product-rating">{item.rating}</div>
              <div className="product-price">
                <h3>{item.actual_price}</h3>
                <s className="product-discount">{item.discounted_price}</s>
             </div>
             <div className="button"><button className="addtocart">Add To Cart</button></div>
            </div>

            

          
         </div>
      ))}
     
   
   
   
   
   
   
   
   
    </div>
  );
};

export default Product;
