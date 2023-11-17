import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../reducers/booksSlice';
import cartReducer from '../reducers/cartSlice'

export default configureStore({
reducer: {
books : booksReducer,
cart : cartReducer,
},
});