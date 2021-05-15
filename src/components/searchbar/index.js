import React from 'react'
import styles from './style.module.css'

const SearchBar = (props) =>  {
    return (
        <div className={styles.main}>
            <input className={styles.searchBar} value={props.input} placeholder={"Search favorite restaurants"} onChange={props.onChange} required
            />
        </div>
    )
}

export default SearchBar