import React from 'react'
import './SectionHeading.css'
function SectionHeading({ title, color }) {
    return (
        <h2 className='title' style={{ color: color }}>{title}</h2>
    )
}

export default SectionHeading