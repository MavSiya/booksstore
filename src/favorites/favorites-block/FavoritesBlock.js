import React, { useCallback, useState } from 'react';
import { useSelector} from 'react-redux';
import FavoritesList from '../favorites-list/FavoritesList';
import './favorites-block.css'; 


export default function FavoritesBlock() {
  const [isFavoritesListVisible, setIsFavoritesListVisible] = useState(false);
  const itemsInFavorites = useSelector(state => state.favorites.itemsInFavorites);


  const handleFavoritesClick = () => setIsFavoritesListVisible(!isFavoritesListVisible);

  return (
    <>
      <div className='favorites-block' onClick={handleFavoritesClick}>
        <img src="./img/heart.svg" alt="Избранное" className='heart' />
      </div>
      {isFavoritesListVisible && <FavoritesList items={itemsInFavorites}/>}
    </>
  );
}
