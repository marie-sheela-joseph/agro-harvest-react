import React from 'react'

function Description({ children, color, align }) {
    return (
        <p style={{ color: color, textAlign: align }}>{children}</p>
    )
}

export default Description