import React from 'react'

function FlexContainer({ children }) {
    return (
        <div className='d-flex' style={{ justifyContent: 'center' }}>{children}</div>
    )
}

export default FlexContainer