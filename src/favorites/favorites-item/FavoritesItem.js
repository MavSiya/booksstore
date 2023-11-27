import React from 'react';
import './favorites-item.css';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentBook } from '../../reducers/booksSlice';
import { useDispatch} from 'react-redux';


export const FavoritesItem = ({
title,
author,
price,
id,
book

}) => {
 const dispatch =  useDispatch();
 const navigate = useNavigate();
  const handlerGoToInfo = () => {
    dispatch(setCurrentBook(book));
    navigate(`/${book.articul}`);
};
  return (
    <>
    <Link to={`/${id}`} className='favorites-item' onClick={handlerGoToInfo}>
    <div className='favorites-item-title'>{title}</div>
      <div className='favorites-item-author'>{author}</div>
    </Link>
    </>
  )
}
