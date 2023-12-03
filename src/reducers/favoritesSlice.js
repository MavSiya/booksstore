// favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    itemsInFavorites: []
  },
  reducers: {
    setItemInFavorites: (state, action) => {
      state.itemsInFavorites.push(action.payload);
    },
    deleteItemFromFavorites: (state, action) => {
      state.itemsInFavorites = state.itemsInFavorites.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { setItemInFavorites, deleteItemFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
