import React from 'react'
import styles from './ContentBlockItem.module.css'
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
            <p>{item.description}</p>
        </div>
    )
}

export default ContentBlockItem