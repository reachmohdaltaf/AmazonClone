// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Crousel.css'
import { useState } from 'react'

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/18._CB543076903_.png",
  "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
 " https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg"
]


const Crousel = () => {
  const  [current, setCurrent] = useState(0)
  
  const nextSlide = ()=>{
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  const prevSlide = ()=>{
    setCurrent(current === 0  ? images.length- 1 : current - 1);
  }


  return (
    <div className='crousel'>
        <div className='left' onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        </div>
        <div className='images'>
          {images.map((item , index)=>(
            current == index && (
              <img className='image' key={index} src={item} alt="image" />
            )
          ))}
        </div>
       
       
       
        <div className='right' onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

        </div>
    </div>
  )
}

export default Crousel