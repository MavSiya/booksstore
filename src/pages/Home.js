import React, {useEffect} from 'react'
import {extractRoleFromToken, getCurrentUserInfo} from '../http/userAPI';
import InfoSeller from '../components/InfoSeller';
import GoodsOfSeller from '../components/GoodsOfSeller';
import InfoBuyer from '../components/InfoBuyer';


export default function Home() {
    const token = localStorage.getItem('token');
    // const role = 'SELLER'; // НЕ ЗАБУДЬ ИЗМЕНИТЬ НА ТО ЧТО ВНИЗУ
    const [role, setRole] = React.useState([]);
    useEffect(() => {
        extractRoleFromToken(token)
            .then((data) => {
                setRole(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }, []);
  return (
    <>       
    <h1>Особистий кабінет</h1>
    <hr></hr>
    <div>
      {role === 'CUSTOMER' && <InfoBuyer />}
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
