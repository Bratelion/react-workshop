import React, { useState} from 'react'
import styles from './style.module.css'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import Default_image from "../../images/default.jpg"
import cogoToast from "cogo-toast"


const ItemCard = (props) => {
    let newFavorite = localStorage.getItem("favorites") === null ? [] : JSON.parse(localStorage.getItem("favorites"));

    const [favorite, setFavorite] = useState(
        newFavorite.findIndex(e => e.id === props.id) === -1 ? false : true
    );
    const [style, setStyle] = useState(
        favorite ? styles.fav : undefined
    );

    let bookmark = favorite ? <AiFillHeart className={styles.bookmark}/> : <AiOutlineHeart className={styles.bookmark}/>

    const handleBookmarkClick = () => {
        newFavorite = localStorage.getItem("favorites") === null ? [] : JSON.parse(localStorage.getItem("favorites"));
        if(favorite) {
            setFavorite(false);
            setStyle();
            cogoToast.error("Removed " + props.name + " from Favorites");
            newFavorite.splice(newFavorite.findIndex(e => e.id === props.id), 1);
        }
        else {
            setFavorite(true);
            setStyle(styles.fav);
            cogoToast.success("Added " + props.name + " to Favorites");
            newFavorite = [
                {id : props.id, name : props.name, imgUrl : props.imgUrl},
                ...newFavorite];
            }
        localStorage.setItem("favorites", JSON.stringify(newFavorite));
        console.log(props.favs);
        if(props.favs) props.onClick(newFavorite);
    }



    return (
        <article className={props.favs ? styles.fav : style}>
            <article className={styles.main} onClick={handleBookmarkClick}>
                <div className={styles.buttonDiv}>
                    <button className={styles.button}>{bookmark}</button> 
                </div>
                <div className={[styles.imageDiv, styles.aspect_ratio_box].join(" ")}>
                    <img className={[styles.image, styles.aspect_ratio_box_inside].join(" ")} src={props.imgUrl ? props.imgUrl : Default_image} />
                </div>
                <div className={styles.textDiv}>
                    <span className={styles.text}>{props.title ? props.title : "RESTAURANT NAME"}</span>
                </div>
            </article>
        </article>
    )
}

export default ItemCard