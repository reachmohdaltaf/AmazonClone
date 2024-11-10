// eslint-disable-next-line no-unused-vars
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import NavbarFilter from "./NavbarFilter/NavbarFilter";
import Sidebar from "./Sidebar/Sidebar";
import "./Navbar.css";


const Navbar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);


  return (
    <div className="top">
      <div className="navheader">
        <NavbarHeader/>
        <NavbarFilter isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible} />
      </div>

      <div className="sidebar-position">
       { isSidebarVisible ?<Sidebar  isSidebarVisible={isSidebarVisible} setSidebarVisible={setSidebarVisible}/>
        : null}
      </div>
    
    </div>
  );
};

export default Navbar;
