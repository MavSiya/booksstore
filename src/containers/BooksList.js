/*Получаем данные из хранилища
Выводит данные на экран */
import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {selectBooks} from '../store/booksSlice';
import Books from "../components/Books";


function BooksList(){
const books = useSelector(selectBooks);
const dispatch = useDispatch();
return(
    <>
    <div className="books-field">
{books.map(item => <Books title={item.title} cost={item.cost} image={item.image} id={item.id} key={item.id} />)}
    </div>
    </>
);
}

export default BooksList;