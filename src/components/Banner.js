import React from 'react'
import './banner.css'
import { data } from '../data'
import Header from './Header'
import Container from './Container'
function Banner() {
    return (
        <section className='banner'>
            <Header title={'Agro Harvest'} list={data.banner.list} />
            <div>
                <Container>
                    <div className='banner__content'>
                        <div>
                            <h2>harvesting</h2>
                            <h3>cultivating new crops to make farmers increase profits</h3>
                            <p>Ut enim ad minim quis nostrud exerci sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud exerci sed.</p>
                            <a href='#'>READ MORE</a>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Banner