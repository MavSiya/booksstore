import React, { useState } from 'react';
import Modal from './littlePiece/Modal';
import './littlePiece/Modal-CatalogPiece.css'
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books/Books';
import { selectBooks } from '../reducers/booksSlice'; 

export default function CatalogPiece() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const allBooks = useSelector(selectBooks);
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  /*const allBooks = useSelector(selectBooks);
const [filteredBooks, setFilteredBooks] = useState(Array.isArray(allBooks) ? allBooks : []);*/


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSearch = () => {
    const genreFilteredBooks = selectedGenre
      ? allBooks.filter((book) => book.genre === selectedGenre)
      : allBooks;

    const searchFilteredBooks = searchTerm
      ? genreFilteredBooks.filter(
          (book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : genreFilteredBooks;

    setFilteredBooks(searchFilteredBooks);
    handleCloseModal();
  };

  const handleShowAllBooks = () => {
    setSelectedGenre('');
    setFilteredBooks(allBooks); // Показать все книги
  };

  const handleInputSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <div className='catalog-container'>
      <h1>Каталог</h1>
      <div className='filter-search-container'>
        <div className='filter-container' onClick={() => setShowModal(true)}>
          <img src="./img/filter.png" alt="Фільтр" className='filter-icon' onClick={() => setShowModal(true)}/>
          <p onClick={() => setShowModal(true)}>Фільтр </p>
        </div>
        <div className='search-container'>
          <input type="text" placeholder="Пошук" className='search-input' value={searchTerm}  onChange={handleInputSearch} onKeyPress={handleEnterKeyPress}/>
        </div>
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <div className="genre-filter-modal">
            <h3>Выберите жанр</h3>
            <label> <input type="radio" value="advanture" checked={selectedGenre === 'advanture'} onChange={handleGenreChange}/>
              Пригоди
            </label>
            <label> <input type="radio" value="Romance" checked={selectedGenre === 'Romance'} onChange={handleGenreChange}/>
            Романтика
            </label>
            <label> <input type="radio" value="Mystery" checked={selectedGenre === 'Mystery'} onChange={handleGenreChange}/>
              Містика
            </label>
            <label> <input type="radio" value="Science fiction" checked={selectedGenre === 'Science fiction'} onChange={handleGenreChange}/>
             Наукова фантастика
            </label>
            <label> <input type="radio" value="fantasy" checked={selectedGenre === 'fantasy'} onChange={handleGenreChange}/>
              Фентезі
            </label>
            <label> <input type="radio" value="Detective" checked={selectedGenre === 'Detective'} onChange={handleGenreChange}/>
              Детектив
            </label>
            <label> <input type="radio" value="Historical literature" checked={selectedGenre === 'Historical literature'} onChange={handleGenreChange}/>
              Історична література
            </label>
            
            <button className='btn' onClick={handleSearch}>Поиск</button>
          </div>
        </Modal>
      )}
    </div>
    <a className='catalog-piece-showAll' onClick={handleShowAllBooks}>Показать все книги</a>
    <div className='books-field'>
        {filteredBooks.map((item) => (
          <Books
            title={item.title}
            author={item.author}
            genre={item.genre}
            cost={item.cost}
            image={item.image}
            seller={item.seller}
            articul={item.articul}
            key={item.key}
          />
        ))}
      </div>
    </>
  );
}
