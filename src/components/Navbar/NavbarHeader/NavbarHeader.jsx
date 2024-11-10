// eslint-disable-next-line no-unused-vars
import React from 'react'
import './NavbarHeader.css'
import cart from '../../../assets/header/cart.png'
import logo from '../../../assets/header/logo.svg'
import india from '../../../assets/header/india.png'
import { Link } from 'react-router-dom'
const NavbarHeader = () => {
  return (
    <nav className='header'>
     
     
     <div className="part1">
     <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='location'>
        <p>Delivering to New Delhi 11020</p>
        <h4><i className="fa fa-map-marker"></i> Update location</h4>
      </div>
     </div>


   
   
   
   
   
   
   
     <div className="part2">
     <div className='searchbar'>
        <select name="" id="">
            <option value="">All</option>
            <option value="">All Categories</option>
            <option value="">Alexa Skill</option>
            <option value="">Amazon Devices</option>
            <option value="">Amazon Fashion</option>
            <option value="">Amazon Fresh</option>
            <option value="">Amazon Fresh Meat</option>
            <option value="">Appliances</option>
        </select>
        <input type="text" placeholder='Search Amazon.in' />
        <button className='btn'><i className='fa fa-search'></i></button>
      </div>
     </div>
    
    
    
    
    
    
    
    <div className="part3">
        <div className='selector'>
        <img className='india' src={india} alt="" />
        <select name="" id="">
            <option value="">EN</option>
        </select>
        </div>

        <div className='hello-sigin'>
            <Link className='link' to="/SignIn"><h6>Hello, Sign in</h6></Link>
            <select name="" id="">
                <option value="">Account & List</option>
            </select>
        </div>

        <div className='order'>
        <h6>Returns</h6>
        <h5>& Orders    </h5>
        </div>

        <div className='cart'>
            <img className='cart' src={cart} 
            alt="" />
            <h4>cart</h4>
        </div>
   
    </div>
    
    
    
    
    
    
    </nav>
  )
}

export default NavbarHeader
