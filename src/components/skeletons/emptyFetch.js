import React from 'react'
import styles from './style.module.css'
import Logo from "../../images/dt.png"

const EmptyFetch = (props) =>  {
    return (
        <div className={styles.main}>
            <span>Oh... Looks like there's no <img src={Logo} className={styles.logo}/> restaurant with the name </span>
            <span className={styles.text_primary}>"{props.value}"</span>
        </div>
    )
}

export default EmptyFetch