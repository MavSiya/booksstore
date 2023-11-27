import { setCurrentBook } from '../../reducers/booksSlice';
import { useNavigate } from 'react-router-dom';
import { deleteItemFromCart, setItemInCart } from '../../reducers/cartSlice';
import { setItemInFavorites, deleteItemFromFavorites } from '../../reducers/favoritesSlice'
import './BooksCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import React, { useEffect } from 'react'
import { getCurrentUserInfo } from '../../http/userAPI';
import { openEditModal } from '../../reducers/modalAddReducer';
import ModalEditBook from '../littlePiece/ModalEditBook';

//onEdit,
function Books(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = useSelector(state => state.cart.itemsInCart.some(items => items.articul === props.articul));
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(props.articul));
    } else {
      dispatch(setItemInCart(props));
    }
  };

  const handlerGoToInfo = () => {
    dispatch(setCurrentBook(props));
    navigate(`/${props.articul}`);
  };

  const isItemInFavorites = useSelector(state => state.favorites.itemsInFavorites.some(item => item.articul === props.articul));

  const handleFavoritesClick = (e) => {
    e.stopPropagation();
    if (isItemInFavorites) {
      dispatch(deleteItemFromFavorites(props.articul));
    } else {
      dispatch(setItemInFavorites(props));
    }
  };


  //для редактирования книг
  /*
    const [user, setUser] = React.useState([]);
  
      useEffect(() => {
          getCurrentUserInfo()
              .then((data) => {
                  setUser(data.data);
              })
              .catch((error) => {
                  console.error('Error:', error);
              });
      }, []);*/

  const role = 'SELLER'; // поставить нужный код
  const isSeller = true; //надо поменять 

  const isEditModalOpen = useSelector((state) => state.modalAdd.isEditModalOpen);
  const handleEditClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(openEditModal(props));
    setIsModalOpen(true);
  };

  return (<>
    <div className='card' onClick={handlerGoToInfo}>
      <div className="books-block">
        <div className="image">
          <img src={props.image} alt="" />
        </div>
        <div className="block-info">
          <div className="info-book">
            <p className="title" data-tooltip={props.title}>{props.title}</p>
            <p className="author">{props.author}</p>
            <p className="genre">{props.genre}</p>
            <p className="seller">Продавець: {props.seller}</p>
          </div>
          <div className="info-sale">
            <div className="cost-to-basket">
              <p className="cost">{props.cost} грн</p>
              <div className='add-to-block'>
                <button className="add-to-favorites" data-key={props.articul} onClick={handleFavoritesClick}>
                  {isItemInFavorites ? <img src="./img/heartClicked.svg" alt="Додано в збережені" /> : <img src="./img/heart.svg" alt="В збережені" />}
                </button>

                {isSeller ? (
                  <button className="add-to-cart" onClick={handleEditClick}>
                    <img src="./img/edit.svg" alt="Редагувати" />
                  </button>
                ) : (
                  <button className="add-to-cart" data-key={props.articul} onClick={handleClick}>
                    {isItemInCart ? <img src="./img/delete-line.svg" alt="Удалить" /> : <img src="./img/basketicon.svg" alt="В корзину" />}
                  </button>)}
                {isModalOpen && (
                  <ModalEditBook onClose={() => setIsModalOpen(false)} isEdit={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
}

export default Books;
