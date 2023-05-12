import React from 'react'
import SectionHeading from './SectionHeading'
import FlexContainer from './FlexContainer'
import ContentBlockItem from './ContentBlockItem'
import styles from './bestHarvesting.module.css'
function BestHarvesting() {
    const description = `Tempor Ut enim ad minim quis nostrud exerci sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud exerci sed nostrud exerci ipsum dolor ut.`
    const items = [{ image: <i class="fa-solid fa-leaf"></i>, title: 'CEREALS', description: 'Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.' },
    { image: <i class="fa-brands fa-apple"></i>, title: 'FRUITS & BERRIES', description: 'Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.' },
    { image: <i class="fa-brands fa-pagelines"></i>, title: 'VEGETABLES', description: 'Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.' }]
    return (
        <section className={styles.bestHarvesting}>
            <div className='container'>
                <div className={styles.bestHarvesting__titleBlock}>
                    <SectionHeading title={'Best Harvesting Agriculture Company'} color={'#323648'} />
                    <p>{description}</p>
                </div>
                <div className={styles.bestHarvesting__contentBlock}>
                    <FlexContainer>
                        {items.map((item) => <ContentBlockItem item={item} type='bestItem' />)}
                    </FlexContainer>
                </div>
            </div>
        </section >
    )
}

export default BestHarvesting