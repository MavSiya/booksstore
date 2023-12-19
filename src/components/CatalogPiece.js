import React, {useEffect, useState} from 'react';
import Modal from './littlePiece/Modal';
import './littlePiece/Modal-CatalogPiece.css'
import {useDispatch, useSelector} from 'react-redux';
import Books from './Books/Books';
import {selectBooks} from '../reducers/booksSlice';
import {getAllBooks} from "../http/userAPI";

export default function CatalogPiece() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((data) => {
        setAllBooks(data.data);
        setFilteredBooks(data.data || []); // Initially set filtered books to all books
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);



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
            <input type="text" placeholder="Пошук" className='search-input' value={searchTerm}
                   onChange={handleInputSearch} onKeyPress={handleEnterKeyPress}/>
          </div>
        </div>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <div className="genre-filter-modal">
              <h3>Выберите жанр</h3>
              <label> <input type="radio" value="Advanture" checked={selectedGenre === 'Advanture'}
                             onChange={handleGenreChange}/>
                Пригоди
              </label>
              <label> <input type="radio" value="Romance" checked={selectedGenre === 'Romance'}
                             onChange={handleGenreChange}/>
                Романтика
              </label>
              <label> <input type="radio" value="Mystery" checked={selectedGenre === 'Mystery'}
                             onChange={handleGenreChange}/>
                Містика
              </label>
              <label> <input type="radio" value="Science fiction" checked={selectedGenre === 'Science fiction'}
                             onChange={handleGenreChange}/>
                Наукова фантастика
              </label>
              <label> <input type="radio" value="Fantasy" checked={selectedGenre === 'Fantasy'}
                             onChange={handleGenreChange}/>
                Фентезі
              </label>
              <label> <input type="radio" value="Detective" checked={selectedGenre === 'Detective'}
                             onChange={handleGenreChange}/>
                Детектив
              </label>
              <label> <input type="radio" value="Historical literature"
                             checked={selectedGenre === 'Historical literature'} onChange={handleGenreChange}/>
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
            price={item.price}
            image={item.image}
            seller={item.seller.email}
            id={item.id}
            description={item.description}
            key={item.key}
            comments={item.comments}
          />
        ))}
      </div>
    </>
  );
}
