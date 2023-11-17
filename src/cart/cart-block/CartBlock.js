import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartList from '../cartList/CartList';
import './item-in-cart.css';
import { ORDER_PAGE } from '../../utils/consts';

export default function CartBlock() {
    const [isCartListVisible, setIsCartListVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
setIsCartListVisible(false);
navigate(ORDER_PAGE);
    }, [navigate]);

  return (
  <>
  <div className='cart-block' onClick={() => setIsCartListVisible(!isCartListVisible)}>
  <div className='cart-block__basket'>
<img src="./img/basketicon.png" alt="Корзина" className='basketicon'/>
{items.length > 0 &&
<div className='items-in-cart'>
{items.length}
</div> 
} 
</div>
{isCartListVisible && <CartList items= {items} onClick={ handleClick }/>}
</div>

  </>  
  )
}
