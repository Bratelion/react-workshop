import React from 'react'
import styles from './style.module.css'
import Logo from "../../images/dt.png"

const Header = () =>  {
    return (
        <div className={styles.main}>
            <a className={styles.link} href="/">
                <img src={Logo} className={styles.logo} alt="Dobar Tek"/>
                <div className={styles.text_primary}> restaurants</div>
            </a>
        </div>
    )
}

export default Header