import React from 'react';
import { deleteItemFromCart, setItemInCart } from '../../reducers/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentBook} from '../../reducers/booksSlice';
import './BookDetail.css';


const BookDetails = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const dispatch = useDispatch();
const book = useSelector(state => state.books.books);
const isItemInCart = useSelector(state => state.cart.itemsInCart.some(items => items.articul === book.articul));

const handleClick = (e) =>{
e.stopPropagation();
if(isItemInCart){
    dispatch(deleteItemFromCart(book.articul));
}else{
dispatch(setItemInCart(book));
}
};

if(!book) return null;

  return (
    <div className='container'>

<div className='block-img-seller'>
        <div className='image-detail'>
        <img src= {book.image}/>
        </div>
        <p>Продавець: {book.seller}</p>
      </div>

      <div className='block-text-with-btn'>
      <div className='block-text'>
        <div className='info-field'>
        <h2>{book.title}</h2>
        </div>

        <div className='info-field'>
          <div className='h33'>
        <h3>Автор:</h3>
        </div>
        <p>{book.author}</p>
        </div>

        <div className='info-field'>
        <div className='h33'><h3>Опис:</h3></div>
        <div>
        <p>{book.description}</p>
        </div>
        </div>

        <div className='info-field'>
        <div className='h33'><h3>Ціна:</h3></div>
        <p>{book.cost}</p>
        </div>

        <div className='info-field'>
        <div className='h33'><h3>Артикул:</h3></div>
        <p>{book.articul}</p>
        </div>
        </div>

<div className='btn-field'>
<button className="add-to-cart" data-key={book.articul} onClick={handleClick}>{isItemInCart ? 'Видалити' : 'В корзину'}</button>
        </div>
      </div>
    
    </div>
  );
};

export default BookDetails;