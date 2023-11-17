import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { selectBooks } from '../reducers/booksSlice';
import BookDetails from '../components/BookPage/BookDetails';

const BookPage = () => {

  return (
    <>
    <h1>Інформація про книгу</h1>
    <hr></hr>
    <div>
      <BookDetails />
    </div>
    </>
  );
};

export default BookPage;