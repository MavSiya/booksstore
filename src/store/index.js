import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../reducers/booksSlice';

export default configureStore({
reducer: {
books : booksReducer,
},
});