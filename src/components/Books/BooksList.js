import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { selectBooks } from '../../reducers/booksSlice'; 
import Books from './Books';
import './BooksCard.css';
import {getAllBooks} from "../../http/userAPI";



export default function BooksList() {
  const [books, setBooks] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getAllBooks(null, null)
      .then((data) => {
        setBooks(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <div className='books-field'>
        {books.map(item => <Books id={item.id} title={item.title} author={item.author} genre={item.genre} description={item.description} cost={item.price}
                                  image={item.image} seller={item.seller.email} articul={item.seller.id} key={item.id}/>)}
      </div>
    </>
  )
}
