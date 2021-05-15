import React from 'react'
import styles from './style.module.css'
import Logo from "../../images/dt.png"

const Results = (props) =>  {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <span>Results for <img src={Logo} className={styles.logo}/> restaurants with the name </span>
                <span className={styles.text_primary}>"{props.value}"</span>
            </div>
        </div>
    )
}

export default Results