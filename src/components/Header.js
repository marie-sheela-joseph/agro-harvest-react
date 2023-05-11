import React from 'react'
import './header.css'
import Container from './Container'
function Header({ title, list }) {
    return (
        <header className='header'>
            <Container>
                <div className='header__logo'>
                    <i class="fa-solid fa-leaf"></i>
                    <h1>{title}</h1>
                </div>
                <div className='header__menu'>
                    <ul>
                        {list.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            </Container>
        </header>
    )
}

export default Header