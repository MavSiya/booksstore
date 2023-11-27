import React from 'react'
import './Info.css';
import { useState } from 'react';
import Modal from './littlePiece/Modal';
import './littlePiece/ModalAddBook.css';
import BooksList from './Books/BooksList';
import GoodsSeller from './littlePiece/GoodsSeller.css';

export default function GoodsOfSeller() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');

  //беру роль для того что бы поменять кнопку
  const token = localStorage.getItem('token');
  const role = 'SELLER'; // НЕ ЗАБУДЬ ИЗМЕНИТЬ НА ТО ЧТО ВНИЗУ
  //const role = extractRoleFromToken(token);



  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModal = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {

    const bookInfo = { title, author, description, price, image };
    console.log(bookInfo);
  };

  //Для добавления изображение в модальном окне
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const inputImgStyles = {
    width: '100%',
    maxWidth: '300px',
    height: '200px',
    backgroundColor: selectedImage ? 'transparent' : '#e8dad3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '20px',
    backgroundImage: selectedImage ? `url(${URL.createObjectURL(selectedImage)})` : '/img/addphoto.png',
    backgroundSize: '98px 98px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };


  //Редактирование книги

  return (
    <>
      <h2> Наявний товар:</h2>
      <div className='container-product'>
        <div className='block-of-cards'>
          <BooksList />
        </div>
        <div className='edit-product'>
          <a className="link" onClick={handleModal}>
            <span className="icon"><img src="/img/add.svg" alt="Aaa Icon" /></span>
            Додати товар</a>

        </div>
      </div>


      {showModal && (
        <Modal className="modal-backdrop" onClose={handleCloseModal}>
          <div className='modal-container'>
            <div className="form-block-addbook inputImg">
              <label className="input-file-img" style={inputImgStyles}>
                {selectedImage ? (
                  <>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                  </>
                ) : (
                  <input type="file" onChange={handleImageChange} />
                )}
              </label>
              {selectedImage && (
                <button type="button" className='modal-edit-img-btn' onClick={handleImageRemove}>
                  Змінити зображення
                </button>
              )}
            </div>

            <div className="modal-body">
              <div className="form-block-addbook">
                <label htmlFor="title">Назва:</label>
                <input type="text" className="input-reg" placeholder="Введіть назву" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div className="form-block-addbook">
                <label htmlFor="author">Автор:</label>
                <input type="text" className="input-reg" placeholder="Введіть автора" value={author} onChange={(e) => setAuthor(e.target.value)} />
              </div>

              <div className="form-block-addbook">
                <label htmlFor="genre">Виберіть жанр:</label>
                <select className="input-reg" id="genre" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                  <option value="Advanture">Пригоди</option>
                  <option value="Romance">Романтика</option>
                  <option value="Mystery">Містика</option>
                  <option value="Science fiction">Наукова фантастика</option>
                  <option value="detective">Детектив</option>
                  <option value="fantasy">Фентезі</option>
                  <option value="Historical literature">Історична література</option>
                </select>
              </div>

              <div className="form-block-addbook">
                <label htmlFor="description">Опис:</label>
                <textarea className="input-reg" placeholder="Введіть опис" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>

              <div className="form-block-addbook">
                <label htmlFor="cost">Ціна:</label>
                <input type="text" className="input-reg" placeholder="Вкажіть ціну" value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}> Додати книгу </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
