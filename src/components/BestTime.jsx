import React from 'react'
import styles from './bestTime.module.css'

function BestTime() {
    return (
        <section className={styles.bestTime}>
            <div className={styles.bestTime__abs}></div>
            <div className={`${styles.bestTime__container} container`}>
                <div className={styles.bestTime__titleBlock}>
                    <h2>The Best Time To <span>Plant The Tree</span> Is Now.</h2>
                </div>
                <div className={styles.bestTime__contentBlock}>
                    <p>Sed ut perspiciatis unde omnis natus error dolor volup tatem ed accus antium dolor emque laudantium, totam rem aperiam, eaqu ipsa quae ab illo quasi architi ecto beatae vitae dicta sunt dolor ipsum.</p>
                    <div>
                        <button>Our Services</button>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestTime