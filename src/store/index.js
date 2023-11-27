import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../reducers/booksSlice';
import cartReducer from '../reducers/cartSlice'
import favoritesReducer from '../reducers/favoritesSlice'
import modalAddReducer from '../reducers/modalAddReducer';

export default configureStore({
reducer: {
books : booksReducer,
cart : cartReducer,
favorites: favoritesReducer,
modalAdd: modalAddReducer,
},
});