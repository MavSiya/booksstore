import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import booksArr from '../containers/books.json';

export const booksSlice = createSlice({
name: "books",
initialState : {
    books : booksArr
},
reducer : {

}
});

export const {} = booksSlice.actions;
export const selectBooks = state => state.books.books;
export default booksSlice.reducer;


