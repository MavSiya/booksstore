import React from 'react'
import {extractRoleFromToken} from '../http/userAPI';
import InfoSeller from '../components/InfoSeller';
import GoodsOfSeller from '../components/GoodsOfSeller';
import InfoBuyer from '../components/InfoBuyer';


export default function Home() {
    const token = localStorage.getItem('token');
    let curRole = ";";

    try {
        const tokenParts = token.split('.'); // Разделение токена на части
        if (tokenParts.length < 2) {
            throw new Error('Invalid token');
        }

        const payload = JSON.parse(atob(tokenParts[1])); // Декодирование и разбор полезной нагрузки
        // Извлечение информации о роли из полезной нагрузки
        curRole = payload.role;
    } catch (error) {
        console.error('Error extracting role from token', error);
        curRole = null;
    }

    return (
        <>
            <h1>Особистий кабінет</h1>
            <hr></hr>
            <div>
                {curRole === 'CUSTOMER' && <InfoBuyer/>}
                {curRole === 'SELLER' && (
                    <>
                        <InfoSeller/>
                        <GoodsOfSeller/>
                    </>
                )}
            </div>
        </>
    )
}
