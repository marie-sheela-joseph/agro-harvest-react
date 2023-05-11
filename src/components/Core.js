import React from 'react'

import Container from './Container'
import TitleBlock from './TitleBlock'
import ContentBlock from './ContentBlock'
import SectionHeading from './SectionHeading'
import FlexContainer from './FlexContainer'
import Description from './Description'
function Core() {
    const heading = `IMPROVING AGRICULTURE, IMPROVING LIVES, CULTIVATING NEW CROPS TO MAKE FARMERS INCREASE PROFIT.`
    const description = `Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullam corper dui turpis dolor sit amet quam. Nulla commodo gravida porttitor. Aenean posuere lacus quis leo imperdiet laoreet. Proin vulputate semper odio quam. Nulla commodo gravida porttitor. Aenean posuere lacus quis.`
    return (
        <section>
            <Container>
                <TitleBlock>
                    <SectionHeading title={'Our Core Values'} color={'#323648'} />
                </TitleBlock>
                <ContentBlock>
                    <FlexContainer>
                        <div className='col-6'>
                            <img src='./assets/core.jpg' alt='harvest' />
                        </div>
                        <div className='col-6' style={{ paddingLeft: '10px' }}>
                            <h3>{heading}</h3>
                            <Description>{description}</Description>
                        </div>
                    </FlexContainer>
                </ContentBlock>
            </Container>
        </section >
    )
}

export default Core