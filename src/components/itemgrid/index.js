import React from 'react'
import styles from './style.module.css'

const ItemGrid = (props) =>  {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {props.children}
            </div>
        </div>
    )
}

export default ItemGrid