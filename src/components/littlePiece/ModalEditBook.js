// ModalAddBook.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { closeEditModal, selectBookForEdit } from '../../reducers/modalAddReducer';
import './GoodsSeller.css';

const ModalEditBook = ({ onClose, isEdit }) => {
  const dispatch = useDispatch();
  const bookForEdit = useSelector(selectBookForEdit);

  // Используйте состояния для хранения данных о книге
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  useEffect(() => {
    if (isEdit && bookForEdit) {
      setTitle(bookForEdit.title);
      setAuthor(bookForEdit.author);
      setGenre(bookForEdit.genre);
      setDescription(bookForEdit.description);
      setCost(bookForEdit.cost);
    }
  }, [isEdit, bookForEdit]);

  const handleSubmit = (e) => {
    e.stopPropagation();
    // Логика для отправки данных на сервер
    onClose(); // 
  };

   //Для редактирования изображение в модальном окне
   const [selectedImage, setSelectedImage] = useState(
    bookForEdit ? bookForEdit.image : null
  );
  
   const handleImageChange = (e) => {
     const file = e.target.files[0];
     setSelectedImage(file);
   };
 
   const handleImageRemove = () => {
    if (selectedImage) {
      URL.revokeObjectURL(URL.createObjectURL(new Blob([selectedImage])));
    }
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
     backgroundImage:`url(${URL.createObjectURL(new Blob([selectedImage]))})`,
     backgroundSize: '300px 200px',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
   };

   useEffect(() => {
    if (isEdit && bookForEdit) {
      setSelectedImage(bookForEdit.image);
    }
  }, [isEdit, bookForEdit]);

  return (
    <Modal className="modal-backdrop" onClose={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <div className="form-block-addbook inputImg">
      <label  className="input-file-img" style={inputImgStyles}>
  {selectedImage ? (
    <>
      <img src={selectedImage}/>
    </>
  ) : (
    <input id="fileInput" type="file" onChange={handleImageChange} />
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
          <label htmlFor="title">Название:</label>
          <input type="text" className="input-reg" value={title} onChange={(e) => setTitle(e.target.value)} onClick={(e) => e.stopPropagation()} />
          </div>

          <div className="form-block-addbook">
          <label htmlFor="author">Автор:</label>
          <input type="text" className="input-reg" value={author} onChange={(e) => setAuthor(e.target.value)} onClick={(e) => e.stopPropagation()}/>
          </div>

          <div className="form-block-addbook">
  <label htmlFor="genre">Виберіть жанр:</label>
  <select className="input-reg" id="genre" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} onClick={(e) => e.stopPropagation()}>
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
              <textarea className="input-reg" value={description} onChange={(e) => setDescription(e.target.value)} onClick={(e) => e.stopPropagation()}/>
              </div>

              <div className="form-block-addbook">
        <label htmlFor="cost">Ціна:</label>
              <input type="text" className="input-reg" value={cost} onChange={(e) => setCost(e.target.value)} onClick={(e) => e.stopPropagation()}/>
              </div>

          </div>

          <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Зберегти</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalEditBook;
