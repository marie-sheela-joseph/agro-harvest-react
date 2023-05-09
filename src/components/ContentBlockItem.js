import React from 'react'
import Description from './Description'
import styles from './ContentBlokItem.module.css'
function ContentBlockItem({ item, type }) {
    let res = ''
    if (type === 'bestItem') {
        res = `${styles[type]} col-s-6 col-4`
    } else if (type === 'chooseItem') {
        res = `${styles[type]} col-s-4 col-2`
    }
    return (
        <div className={res}>
            {item.image}
            <h3>{item.title}</h3>
            <Description>{item.description}</Description>
        </div>
    )
}

export default ContentBlockItem