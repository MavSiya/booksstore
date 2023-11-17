import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { selectBooks } from '../../reducers/booksSlice'; 
import Books from './Books';
import './BooksCard.css'; 


export default function BooksList() {
    const books = useSelector(selectBooks);
    const dispatch = useDispatch();

  return (
    <>
    <div className='books-field'>
       {books.map(item => <Books title={item.title} author={item.author} genre={item.genre} cost={item.cost}
      image={item.image} seller={item.seller} articul={item.articul} key={item.key} />)} 
    </div>
    </>
  )
}
