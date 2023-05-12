import React from 'react'
import styles from './footer.module.css'
import SectionHeading from './SectionHeading'
function Footer() {
  return (
    <section className={styles.footer}>
        <div className='container'>
            <div className={styles.footer__titleBlock}>
            <i class="fa-solid fa-leaf"></i>
            <SectionHeading title={'Agro Harvest'} color={'#fff'}/>
            </div>
            <div className={styles.footer__contentBlock}>
                <div>
                    <span>Agriculture Business, 2nd Block, USA</span>
                    <span>+12(345) 6789 111.</span>
                    <span>Example@gmail.com</span>
                </div>
                <ul className={styles.footer__socialIcons}>
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fa-brands fa-square-twitter"></i></li>
                    <li><i class="fa-brands fa-square-google-plus"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-solid fa-square-rss"></i></li>
                    <li><i class="fa-brands fa-pinterest"></i></li>
                </ul>                
                <p>© 2019 Agro Harvest. All rights reserved | Design by W3layouts</p>
            </div>

        </div>
    </section>
  )
}

export default Footer