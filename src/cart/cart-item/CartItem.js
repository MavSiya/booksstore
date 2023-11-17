import React from 'react';
import './cart-item.css';

export const CartItem = ({
title,
author,
price,
id
}) => {
  return (
    <>
    
    <div className='cart-item'>
<span>{ title }</span>
<div className='cart-item__price'>
    <span> {price} грн</span>
</div>
    </div>

    </>
  )
}
