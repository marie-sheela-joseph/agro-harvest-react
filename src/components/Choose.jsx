import React from 'react'
import styles from './choose.module.css'
import SectionHeading from './SectionHeading'
import ContentBlockItem from './ContentBlockItem'
import FlexContainer from './FlexContainer'

function Choose() {
    const items = [{ image: <i class="fa-brands fa-apple"></i>, title: 'GRAINS', description: 'quis nostrum ullamet corporis suscipit.' },
    { image: <i class="fa-brands fa-skyatlas"></i>, title: 'SEED TRAITS', description: 'quis nostrum ullamet corporis suscipit.' },
    { image: <i class="fa-brands fa-yelp"></i>, title: 'SAFETY', description: 'quis nostrum ullamet corporis suscipit.' },
    { image: <i class="fa-brands fa-viadeo"></i>, title: 'CULTIVATION', description: 'quis nostrum ullamet corporis suscipit.' },
    { image: <i class="fa-solid fa-leaf"></i>, title: 'ENVIRONMENT', description: 'quis nostrum ullamet corporis suscipit.' }]
    return (
        <section className={styles.choose}>
            <div className='container'>
                <div className={styles.choose__titleBlock}>
                    <SectionHeading title={'Why Choose Us'} color={'#fff'} />
                </div>
                <div className={styles.choose__contentBlock}>
                    <FlexContainer>
                        {items.map((item) => <ContentBlockItem item={item} type='chooseItem' />)}
                    </FlexContainer>
                </div>
            </div>
        </section>
    )
}

export default Choose