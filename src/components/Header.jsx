import React from 'react'
import styles from './header.module.css'
function Header({ title, list }) {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__logo}>
                    <i class="fa-solid fa-leaf"></i>
                    <h1>{title}</h1>
                </div>
                <div className={styles.header__menu}>
                    <ul>
                        {list.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header