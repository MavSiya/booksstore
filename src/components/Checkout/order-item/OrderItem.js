import React from 'react'
import './order-item.css'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../../reducers/cartSlice'

export const OrderItem = ({ book }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(book.articul));
    };

    return (
        <>

            <div className='order-item'>
                <div className='order-item__cover'>
                    <img src={book.image} />
                </div>


                <div className='order-item__info'>
                    <div className='order-item__title'>
                        <span>{book.title}</span>
                    </div>
                    <div className='order-item__author'>
                        <span>{book.author}</span>
                    </div>
                </div>
                <div className='order-item__price'>
                    <span>{book.cost} грн.</span>
                    <img src='./img/delete.svg' className='cart-item__delete-icon' onClick={handleClick} />
                </div>
            </div>

        </>
    )
}
