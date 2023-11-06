import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH_ROUTE, CATALOG_ROUTE, HOME_ROUTE } from '../utils/consts';
import { useState, useEffect } from 'react';

export default function Head() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setIsAuthenticated(true);
    } else {
        setIsAuthenticated(false);
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
          <li> <Link to={CATALOG_ROUTE}>Каталог</Link></li>
          <li><img src="./img/basketicon.png" alt="Корзина" className='basketicon' /></li>
          {isAuthenticated ? (
            <li>
              <Link to={HOME_ROUTE}>Особистий кабінет</Link>
              <button onClick={handleLogout}>Выход</button>
            </li>
          ) : (
            <li>
              <Link to={AUTH_ROUTE}>Вхід</Link>
            </li>
          )}
        </ul>
    </header>
    
    </>
  )
}
