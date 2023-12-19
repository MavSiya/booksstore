import React from 'react'
import './Info.css';
import {useState} from 'react';
import Modal from './littlePiece/Modal';
import './littlePiece/ModalAddBook.css';
import BooksList from './Books/BooksList';
import GoodsSeller from './littlePiece/GoodsSeller.css';
import {getAllBooks, postBook} from "../http/userAPI";

export default function GoodsOfSeller() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModal = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    // Добавьте здесь логику отправки информации о книге на сервер
    if (!title || !author || !description || !price || !image) {
      alert('Заповніть всі поля');
      return;
    }

    postBook({title, author, description, price, image, genre})
      .then((data) => {
        var status = data.status;

        if (status === 201) {
          alert('Книга успішно додана');
          handleCloseModal();
        } else {
          alert('Помилка при додаванні книги');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    const bookInfo = {title, author, description, price, image};
    console.log(bookInfo);
    // Добавьте здесь логику для добавления книги на страницу продавца
  };
  return (
    <>
      <h2> Наявний товар:</h2>
      <div className='container-product'>
        <div className='block-of-cards'>
          <BooksList/>
        </div>
        <div className='edit-product'>
          <a className="link" onClick={handleModal}>
            <span className="icon"><img src="/img/add.svg" alt="Aaa Icon"/></span>
            Додати товар</a>

          <a className="link">
            <span className="icon"><img src="/img/edit.svg" alt="Edit Icon"/></span>
            Редагувати товар
          </a>
        </div>
      </div>


      {showModal && (
        <Modal className="modal-backdrop" onClose={handleCloseModal}>
          <div className='modal-container'>
            <div className="form-block-addbook inputImg">
              <label className='input-file-img'>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
              </label>
            </div>

            <div className="modal-body">
              <div className="form-block-addbook">
                <label htmlFor="lastname">Назва:</label>
                <input type="text" className="input-reg" placeholder="Введіть назву" value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
              </div>

              <div className="form-block-addbook">
                <label htmlFor="lastname">Автор:</label>
                <input type="text" className="input-reg" placeholder="Введіть автора" value={author}
                       onChange={(e) => setAuthor(e.target.value)}/>
              </div>

              <div className="form-block-addbook">
                <label htmlFor="genre">Виберіть жанр:</label>
                <select className="input-reg" id="genre" name="genre" value={genre}
                        onChange={(e) => setGenre(e.target.value)}>
                  <option value="Detective">Детектив</option>
                  <option value="Science">Наука</option>
                  <option value="Fantasy">Фентезі</option>
                  <option value="Romance">Романтика</option>
                  <option value="Horror">Жахи</option>
                  <option value="Comedy">Комедія</option>
                  <option value="Psychology">Психологія</option>
                  <option value="Drama">Драма</option>
                </select>
              </div>

              <div className="form-block-addbook">
                <label htmlFor="lastname">Опис:</label>
                <textarea className="input-reg" placeholder="Введіть опис" value={description}
                          onChange={(e) => setDescription(e.target.value)}/>
              </div>

              <div className="form-block-addbook">
                <label htmlFor="lastname">Ціна:</label>
                <input type="text" className="input-reg" placeholder="Вкажіть ціну" value={price}
                       onChange={(e) => setPrice(e.target.value)}/>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}> Додати книгу</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
