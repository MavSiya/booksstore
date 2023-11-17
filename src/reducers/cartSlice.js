import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
state.itemsInCart = state.itemsInCart.filter(book => book.articul != action.payload)
        }
    }
});

export const {setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;