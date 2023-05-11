import React from 'react'

function Section({ children, background }) {
    return (
        <section style={{ background: background }}>
            {children}
        </section>
    )
}

export default Section