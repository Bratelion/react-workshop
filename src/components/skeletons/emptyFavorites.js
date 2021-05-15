import React from 'react'
import styles from './style.module.css'
import Logo from "../../images/dt.png"


const EmptyFavorites = () =>  {
    return (
        <div className={styles.main}>
            <p>Looks like you don't have any favorite restaurants</p>
            <p>Search for them and click on the card to save your favorite <img src={Logo} className={styles.logo}/> restaurant</p>
        </div>
    )
}

export default EmptyFavorites