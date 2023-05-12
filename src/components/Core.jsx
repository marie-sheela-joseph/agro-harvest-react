import React from 'react'
import SectionHeading from './SectionHeading'
import FlexContainer from './FlexContainer'
import { data } from '../data'
import styles from './core.module.css'
function Core() {
    const heading = data.core.heading
    const description = data.core.description
    return (
        <section className={styles.core}>
            <div className='container'>
                <div className={styles.core__titleBlock}>
                    <SectionHeading title={'Our Core Values'} color={'#323648'} />
                </div>
                <div className={styles.core__contentBlock}>
                    <FlexContainer>
                        <div className='col-6'>
                            <img src='./assets/core.jpg' alt='harvest' />
                        </div>
                        <div className='col-6' style={{ paddingLeft: '10px' }}>
                            <h3>{heading}</h3>
                            <p>{description}</p>
                        </div>
                    </FlexContainer>
                </div>
            </div>
        </section >
    )
}

export default Core