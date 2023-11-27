import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditModalOpen: false,
  bookForEdit: null,
};

const modalAddSlice = createSlice({
  name: 'modalAdd',
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.bookForEdit = action.payload;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.bookForEdit = null;
    },
  },
});

export const { openEditModal, closeEditModal } = modalAddSlice.actions;
export const selectIsEditModalOpen = (state) => state.modalAdd.isEditModalOpen;
export const selectBookForEdit = (state) => state.modalAdd.bookForEdit;
export default modalAddSlice.reducer;
