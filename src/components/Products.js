import React from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { data } from '../data'
import Product from './Product'
import './products.css'
function Products() {
    return (
        <section className='products'>
            <Container>
                <div className='products__titleBlock'>
                    <SectionHeading title={'Our Products and Services'} color={'#323648'} />
                </div>
                <div className='products__contentBlock'>
                    {data.products.map((product) => <Product title={product.title} description={product.description}
                        imgSrc={product.imgSrc}
                        imgAlt={product.imgAlt} />)}
                </div>
            </Container>
        </section>
    )
}

export default Products