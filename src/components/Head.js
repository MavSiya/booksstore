import React from 'react';
import { Link } from 'react-router-dom';

export default function Head() {
  return (<>
    <header>
        <img src="./img/logo.png" alt="Лого" className='logo' />
        <ul className="nav">
          <li> <Link to='/'>Каталог</Link></li>
          <li><img src="./img/basketicon.png" alt="Корзина" className='basketicon' /></li>
          <li><Link to='/auth'>Вхід</Link></li>
        </ul>
    </header>
    
    </>
  )
}
