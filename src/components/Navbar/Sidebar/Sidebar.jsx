// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Sidebar.css";

const myobj = [
  {
    Title: "Trending",
    category: ["Best Seller", "New Release", "Movers and Shakers"]
  },
  {
    Title: "Digital Content and Device",
    category: ["Echo & Alexa", "FIre TV", "Kindle e-Book"]
  },
  {
    Title: "Shop by Category",
    category: ["Mobile, Computers", "New Release", "Top Rated"]
  },
  {
    Title: "Trending",
    category: ["Best Seller", "New Release", "Top Rated"]
  },
  {
    Title: "Trending",
    category: ["Best Seller", "New Release", "Top Rated"]
  },
];

const Sidebar = ({isSidebarVisible, setSidebarVisible}) => {
  return (
   <div className="sidebar-shadow">
     <div className="sidebar">
      <div className="user">
        <h3>
          <i className="fa fa-user"> </i> Hello, Sign in
        </h3>
        <div className="crossbtn" onClick={()=>setSidebarVisible(false)}>X</div>
      </div>

      

      <div className="category">
        {myobj.map((item, index) => (
          <ul key={index}>
            <h3>{item.Title}</h3>
            {item.category.map((cat, i) => (
              <li key={i}>{cat}</li> 
            ))}
          </ul>
        ))}
      </div>
    </div>
    <div className="shadow">dsfs</div>
   </div>
  );
};

export default Sidebar;
