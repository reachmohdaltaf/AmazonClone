  // eslint-disable-next-line no-unused-vars
  import React from 'react'
  import './NavbarFilter.css'

  const obj =[
    {"name": "Fresh"},
    {"name": "Mx Player"},
    {"name": "Sell"},
    {"name": "Best Seller"},
    {"name": "Today's Deals"},
    {"name": "Mobiles"},
    {"name": "Electronics"},
    {"name": "Home & Kitchen"},
    {"name": "Customer Service"},
    {"name": "Prime"},

  ]


  const NavbarFilter = ({isSidebarVisible, setSidebarVisible}) => {
    
    return (
      <div className='filter-header'>

        <div className='p1'>
          <ul>


            <li onClick={()=>setSidebarVisible(true)}><i className='fa fa-bars' ></i> All</li>




            {
              obj.map((item, index)=>{
                return(
                  <li key={index}>{item.name}</li>
                )
              })
            }
            </ul>
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Vettaiyan/400x39-SWM-NP._CB543047660_.jpg" alt="" />
        </div>
        
        
        
        
        <div className='p2'></div>
      </div>
    )
  }

  export default NavbarFilter
