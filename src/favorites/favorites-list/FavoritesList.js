import React from 'react';
import { useSelector } from 'react-redux';
import './favorites-list.css'; 
import { FavoritesItem } from '../favorites-item/FavoritesItem';

export default function FavoritesList({ onClick }) {
  const items = useSelector(state => state.favorites.itemsInFavorites);

  return (
    <div className='favorites-list'>
      <div className='favorites-list__books-list'>
        {items.length > 0 ? items.map((book) => 
         <FavoritesItem key={book.articul} title={book.title} author={book.author} articul={book.articul} onClick={onClick} book={book}/>) : (
            <p>Немає збережених</p>
          )}
        </div>
        </div>
  );
}



