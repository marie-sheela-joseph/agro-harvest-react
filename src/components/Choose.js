import React from 'react'
import './choose.css'
import Container from './Container'
import TitleBlock from './TitleBlock'
import ContentBlock from './ContentBlock'
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
        <section className='choose'>
            <Container>
                <TitleBlock>
                    <SectionHeading title={'Why Choose Us'} color={'#fff'} />
                </TitleBlock>
                <ContentBlock>
                    <FlexContainer>
                        {items.map((item) => <ContentBlockItem item={item} type='chooseItem' />)}
                    </FlexContainer>
                </ContentBlock>
            </Container>
        </section>
    )
}

export default Choose