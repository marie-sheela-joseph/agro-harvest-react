import React from 'react'
import './product.css'
function Product({ imgSrc, imgAlt, title, description }) {
    return (
        <div className='product col-s-6 col-4'>
            <div>
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className='product__about'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Product