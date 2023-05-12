import React from 'react'
import SectionHeading from './SectionHeading'
import { data } from '../data'
import Product from './Product'
import './products.css'
function Products() {
    return (
        <section className='products'>
            <div className='container'>
                <div className='products__titleBlock'>
                    <SectionHeading title={'Our Products and Services'} color={'#323648'} />
                </div>
                <div className='products__contentBlock'>
                    {data.products.map((product) => <Product title={product.title} description={product.description}
                        imgSrc={product.imgSrc}
                        imgAlt={product.imgAlt} />)}
                </div>
            </div>
        </section>
    )
}

export default Products