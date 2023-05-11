import React from 'react'
import Container from './Container'
import ContentBlock from './ContentBlock'
import FlexContainer from './FlexContainer'
import './innovators.css'
function Innovators({ heading, description, list, background }) {
    return (
        <section className='innovators'>
            <div className='abs'></div>
            <Container>
                <ContentBlock>
                    <FlexContainer>
                        <h3 className='col-s-4'>{heading}</h3>
                        <div className='col-s-4 description'>{description}</div>
                        <div className='col-s-4'>
                            <ul>
                                {list.map((item) => <li>{item}</li>)}
                            </ul>
                        </div>
                    </FlexContainer>
                </ContentBlock>
            </Container>

        </section>
    )
}

export default Innovators