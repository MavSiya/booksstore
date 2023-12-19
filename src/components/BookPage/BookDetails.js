import React, {useEffect, useState} from 'react';
import {deleteItemFromCart, setItemInCart} from '../../reducers/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentBook} from '../../reducers/booksSlice';
import './BookDetail.css';
import {addComment, deleteCommentByBookId, getCommentsByBookId} from "../../http/userAPI";


const BookDetails = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.books);
  const isItemInCart = useSelector(state => state.cart.itemsInCart.some(items => items.id === book.id));
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments()
      .then(() => console.log('Comments loaded'))
      .catch((error) => console.error('Error loading comments:', error));
  }, [book]);

  const loadComments = async () => {
    if (book) {
      try {
        setComments(book.comments)
      } catch (error) {
        console.error('Error loading comments:', error);
      }
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== '' && book) {
      try {
        await addComment(book.id, newComment);
        setNewComment('');
        await loadComments();
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  const handleDeleteComment = async (index) => {
    if (book && comments[index]) {
      try {
        await deleteCommentByBookId(comments[index].id);
        await loadComments();
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(book));
    } else {
      dispatch(setItemInCart(book));
    }
  };

  if (!book) return null;
  const imageUrl = `data:image/png;base64,${book.image}`;

  return (
    <div className='container'>

      <div className='block-img-seller'>

        <div className='image-detail'>
          <img src={imageUrl}/>
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
            <p>{book.price}</p>
          </div>

          <div className='info-field'>
            <div className='h33'><h3>Артикул:</h3></div>
            <p>{book.id}</p>
          </div>
        </div>

        <div className='btn-field'>
          <button className="add-to-cart" data-key={book.id}
                  onClick={handleClick}>{isItemInCart ? 'Видалити' : 'В корзину'}</button>
        </div>
      </div>
      <div className='bookDetails-comment'>
        <h2>Коментарі</h2>
        <textarea
          className="input-reg"
          placeholder="Введите комментарий"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Добавить</button>
        {comments?.map((comment, index) => (
          <div key={index} className="comment">
            <br/>
            <p>{comment.message}</p>
            <p>{comment.commenterEmail}</p>
            <button onClick={() => handleDeleteComment(index)}>Удалить</button>
          </div>
        ))}
        {/*{comments?.map((comment, index) => (*/}
        {/*  <div key={index} className="comment">*/}
        {/*    <p>{comment.commenterEmail}</p>*/}
        {/*    <button onClick={() => handleDeleteComment(index)}>Удалить</button>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default BookDetails;