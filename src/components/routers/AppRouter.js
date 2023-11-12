import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { checkTokenValidity } from '../../http/userAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const  AppRouter = () => {
    const [isAuth, setIsAuth] = useState(true); // ПОМЕНЯЙ НА ФОЛЗ!!!!

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            checkTokenValidity(token)
                .then((response) => {
                    if (response.status === 200) {
                        setIsAuth(true);
                    } else {
                        setIsAuth(false);
                    }
                })
                .catch((error) => {
                    console.error('Error checking token validity', error);
                    setIsAuth(false);
                });
        }
    }, []);

    return (
        <Routes>
            {isAuth === true && authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
        </Routes>
    );
};

export default AppRouter;
