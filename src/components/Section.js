import React from 'react'

function Section({ children, color }) {
    return (
        <div className='section' style={{ backgroundColor: color }}>
            {children}
        </div>
    )
}

export default Section