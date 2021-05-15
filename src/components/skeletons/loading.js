import React from 'react'
import styles from './style.module.css'
import Loader from "react-loader-spinner"

const Loading = (props) =>  {
    return (
        <div className={styles.main}>
            <span>Searching for </span>
            <span className={styles.text_primary}>"{props.value}"</span>
            <Loader 
                className={styles.rings}
                type="Rings"
                color="var(--red)"
                height={200}
                width={200}
            />
        </div>
    )
}

export default Loading