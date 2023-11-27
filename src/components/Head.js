import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH_ROUTE, CATALOG_ROUTE, HOME_ROUTE } from '../utils/consts';
import { useState, useEffect } from 'react';
import CartBlock from '../cart/cart-block/CartBlock';
import '../FileCSS/HeadCss.css'
import FavoritesBlock from '../favorites/favorites-block/FavoritesBlock';

export default function Head() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsAuthenticated(true);
    } else {
        setIsAuthenticated(true);
    }
}, []);

const handleLogout = () => {
  localStorage.removeItem('token');
  setIsAuthenticated(false);
};

  return (<>
    <header>
        <img src="./img/logo.png" alt="Лого" className='logo' />
        <ul className="nav">
          <li className='header-li'> <Link to={CATALOG_ROUTE}>Каталог</Link></li>
          <li><CartBlock /></li>
          <li><FavoritesBlock/></li>
          {isAuthenticated ? (
            <li className='header-li'>
            <Link to={HOME_ROUTE} className="logout-link">Особистий кабінет</Link>
            <a onClick={handleLogout} className="logout-link">Вихід</a>
          </li>
          ) : (
            <li className='header-li'>
              <Link to={AUTH_ROUTE}>Вхід</Link>
            </li>
          )}
        </ul>
    </header>
    
    </>
  )
}
