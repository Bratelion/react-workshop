import React, { useState, useRef, useEffect } from "react";
import ItemCard from "../../components/itemcard";
import ItemGrid from "../../components/itemgrid";
import SearchBar from "../../components/searchbar";
import {Loading, EmptyFetch, EmptyFavorites, NetworkError, Results, HaveFavorites} from "../../components/skeletons"

const API_URL = "https://api.dobartek.hr/v1/restaurants/search?latitude=43.508133&longitude=16.440193&isFoodPickup=false&query=$QUERY"

function Favs() {
  const searchInterval = useRef();
  const [input, setInput] = useState("");
  const [restaurantList, setRestaurantList] = useState("");
  const [storage, setStorage] = useState("");
  const [skeleton, setSkeleton] = useState("");

  const fetchData = async () => {
    console.log("Fetching data...");
    const fetchUrl = API_URL.replace("$QUERY", input);
    try{
        const data = await fetch(fetchUrl)
        const response = await data.json()
        setRestaurantList(response);
        console.log(response);
        setSkeleton("");
    } catch (e) {
        console.log("ERROR FETCHING DATA!");
    }
  };

  const handleSearchChange = e => {
    setInput(e.target.value);
  }

  function handleBookmarkClick(key) {
    setStorage(key);
  }


  let favorites = localStorage.getItem("favorites") === null ? [] : JSON.parse(localStorage.getItem("favorites"));
  useEffect(() => {
    if(input !== ""){
      setRestaurantList([]);
      if (searchInterval.current !== undefined) {
        clearTimeout(searchInterval.current);
      }
      searchInterval.current = setTimeout(fetchData, 1000);
      setSkeleton(<Loading value={input}/>);
    }
    else {
      clearTimeout(searchInterval.current);
      setSkeleton("");

      if(favorites.length === 0) setSkeleton(<EmptyFavorites />);
      else setSkeleton(<HaveFavorites value={favorites.length}/>);
    }
  }, [input, storage])

  let grid;
  if(favorites.length !== 0 && input === "" ) {
    grid = <>
      <ItemGrid>        
        {favorites && favorites.map(({ rating, title, imgUrl }) => {
          return (
            <ItemCard
              imgUrl = {imgUrl}
              title = {title}
              rating = {rating}
              onClick = {handleBookmarkClick}
              favs = {true}
            />
          )}
        )}
      </ItemGrid>
      </>
    }
  else {
    grid = <ItemGrid>
    {restaurantList && restaurantList.map(({ rating, title, profilePicture }) => {
      return (
        <ItemCard
          imgUrl = {profilePicture.url1x}
          title = {title}
          rating = {rating}
          favs = {false}
        />
      )}
    )}
  </ItemGrid>
  }
  return (
    <div className="App">
      <SearchBar input={input} onChange={handleSearchChange}/>
      {skeleton}
      {grid}
    </div>
  );
}

export default Favs;