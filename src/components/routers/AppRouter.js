import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from './routes';
import { checkTokenValidity } from '../../http/userAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const  AppRouter = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            checkTokenValidity(token)
                .then((response) => {
                    if (response.status === 200) {
                        const { role } = response.data; // Предположим, что данные о роли пользователя возвращаются с сервера
                        setUserRole(role);
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
            {isAuth === true && authRoutes.map(({ path, Component, role }) => {
                    if ((role === 'SELLER' && userRole === 'SELLER') || (role === 'BUYER' && userRole === 'BUYER')) {
                        return <Route key={path} path={path} element={<Component />} exact />;
                    }
                    return null;})
            }
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;
