import React from 'react'
import styles from './style.module.css'
import Logo from "../../images/dt.png"

const NetworkError = () =>  {
    return (
        <div className={styles.main}>
            <span>It seems like there is an error on <img src={Logo} className={styles.logo}/> side</span>
            <p>Check back later</p>
        </div>
    )
}

export default NetworkError