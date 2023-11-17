import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import booksArr from '../components/Books/books.json';

export const booksSlice = createSlice({
name: "books",
initialState : {
    books : booksArr
},
reducers : {
    setCurrentBook: (state, action) => {
state.books = action.payload;
    }
}
});

export const { setCurrentBook } = booksSlice.actions;
export const selectBooks = state => state.books.books;
export default booksSlice.reducer;

