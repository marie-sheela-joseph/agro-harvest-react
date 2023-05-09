import React from 'react'
import Description from './Description'

function ContentBlockItem({ item, color }) {
    return (
        <div className='col-s-6 col-4 contentBlockItem' style={{ textAlign: 'center', padding: '2px' }}>
            <div className='contentBlockItem__icon' style={{ backgroundColor: color, width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', margin: 'auto', marginBottom: '10px' }}>{item.image}</div>
            <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
            <Description>{item.description}</Description>
        </div>
    )
}

export default ContentBlockItem