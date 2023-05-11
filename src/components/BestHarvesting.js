import React from 'react'

import Container from './Container'
import TitleBlock from './TitleBlock'
import ContentBlock from './ContentBlock'
import SectionHeading from './SectionHeading'
import Description from './Description'
import FlexContainer from './FlexContainer'
import ContentBlockItem from './ContentBlockItem'

function BestHarvesting() {
    const description = `Tempor Ut enim ad minim quis nostrud exerci sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nostrud exerci sed nostrud exerci ipsum dolor ut.`
    const items = [{ image: <i class="fa-solid fa-leaf"></i>, title: 'CEREALS', description: 'Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.' },
    { image: <i class="fa-brands fa-apple"></i>, title: 'FRUITS & BERRIES', description: 'Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.' },
    { image: <i class="fa-brands fa-pagelines"></i>, title: 'VEGETABLES', description: 'Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet quam.' }]
    return (
        <section>
            <Container>
                <TitleBlock>
                    <SectionHeading title={'Best Harvesting Agriculture Company'} color={'#323648'} />
                    <Description color={'#707579'} align={'center'}>{description}</Description>
                </TitleBlock>
                <ContentBlock>
                    <FlexContainer>
                        {items.map((item) => <ContentBlockItem item={item} type='bestItem' />)}
                    </FlexContainer>
                </ContentBlock>
            </Container>
        </section>
    )
}

export default BestHarvesting