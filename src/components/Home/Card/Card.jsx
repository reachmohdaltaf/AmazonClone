// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Card.css'

function Card({title, link1, link2, link3, link4, pages}) {
    return (
        <div className='card'>
            <div className='title'><h3>{title}</h3></div>
            <div className='images'>
                <div>
                <img src={link1} alt="" /><p>Cushion covers, bedsheets & more</p>
                </div>
                <div>
                <img src={link2} alt="" /><p>Figurines, vases & more</p>
                </div>
                <div>
                <img src={link3} alt="" /><p>Cushion covers, bedsheets & more</p>
                </div>
                <div>
                <img src={link4} alt="" /><p>Cushion covers, bedsheets & more</p>
                </div>
                
            </div>
            <div className='explore'><a href={pages}>Explore All</a></div>
        </div>
    )
}

export default Card