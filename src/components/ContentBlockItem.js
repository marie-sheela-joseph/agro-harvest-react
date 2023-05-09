import React from 'react'
import Description from './Description'

function ContentBlockItem({ item, color, bgColor, responsive }) {
    return (
        <div className={`${responsive} contentBlockItem`} style={{ textAlign: 'center', padding: '2px' }}>
            <div className='contentBlockItem__icon' style={{ fontSize: '50px', backgroundColor: bgColor, width: '70px', height: '70px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: color, margin: 'auto', marginBottom: '10px' }}>{item.image}</div>
            <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
            <Description>{item.description}</Description>
        </div>
    )
}

export default ContentBlockItem