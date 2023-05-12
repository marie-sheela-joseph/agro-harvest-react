import React from 'react'
import FlexContainer from './FlexContainer'
import styles from './innovators.module.css'
function Innovators({ heading, description, list, background }) {
    return (
        <section className={styles.innovators}>
            <div className={styles.innovators__bg_filter}></div>
            <div className={`${styles.innovators__container} container`}>
                <div>
                    <FlexContainer>
                        <h3 className='col-s-4'>{heading}</h3>
                        <div className={`${styles.innovators__description} col-s-4`}>{description}</div>
                        <div className='col-s-4'>
                            <ul>
                                {list.map((item) => <li>{item}</li>)}
                            </ul>
                        </div>
                    </FlexContainer>
                </div>
            </div>
        </section>
    )
}

export default Innovators