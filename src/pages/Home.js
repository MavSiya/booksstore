import React from 'react'
import {extractRoleFromToken} from '../http/userAPI';
import InfoSeller from '../components/InfoSeller';
import GoodsOfSeller from '../components/GoodsOfSeller';
import InfoBuyer from '../components/InfoBuyer';


export default function Home() {
    const token = localStorage.getItem('token');
    const role = 'SELLER'; // НЕ ЗАБУДЬ ИЗМЕНИТЬ НА ТО ЧТО ВНИЗУ
    //const role = extractRoleFromToken(token);
  return (
    <>       
    <h1>Особистий кабінет</h1>
    <hr></hr>
    <div>
      {role === 'BUYER' && <InfoBuyer />}
      {role === 'SELLER' && (
        <>
          <InfoSeller />
          <GoodsOfSeller />
        </>
      )}
    </div>
    </>
  )
}
