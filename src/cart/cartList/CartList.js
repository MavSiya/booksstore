import React from 'react';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../utils/util';
import './cartlist.css';
import {CartItem} from '../cart-item/CartItem';

export default function CartList({ items, onClick }) {
  return (
    <div className='cart-list'>
      <div className='cart-list__books-list'>
        {items.length > 0 ? items.map((book) => <CartItem key={book.id} title={book.title} price={book.price} articul={book.id} />) : (
          <p>Корзина пуста</p>
        )}
      </div>

      {items.length > 0 && (
        <div className='cart-list_arrange'>
          <div className='cart-list__total-price'>
            <span> Всього:</span>
            <span>{calcTotalPrice(items)} грн</span>
          </div>
          <button className='btn' onClick={onClick}>
            Оформити замовлення
          </button>
        </div>
      )}
    </div>
  );
}