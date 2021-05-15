import React from 'react'
import styles from './style.module.css'

const haveFavorites = (props) =>  {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Your favorite <span className={styles.textNumber}>{props.value === 1 ? "" : props.value}</span> <span>{props.value%10 === 1 && props.value !== 11 ? "restaurant is:" : "restaurants are:"}</span></p>
        </div>
    )
}

export default haveFavorites