import React, {useEffect} from 'react'
import './Info.css';
import {getCurrentUserInfo} from "../http/userAPI";

export default function InfoBuyer() {

  const [user, setUser] = React.useState([]);

  useEffect(() => {
    getCurrentUserInfo()
      .then((data) => {
        setUser(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (<>
    <div class="column">
      <div class="row">
        <div class="label">Покупець</div>
      </div>
      <div class="row">
        <div class="label">Ім'я:</div>
        <div class="info">{user?.firstName}</div>
      </div>
      <div class="row">
        <div class="label">Прізвище:</div>
        <div class="info">{user?.lastName}</div>
      </div>
      <div class="row">
        <div class="label">Пошта:</div>
        <div class="info">{user?.email}</div>
      </div>
      <div class="row">
        <div class="label">Бонуси:</div>
        <div class="info">{user?.bonusesAmounts}</div>
      </div>
      <div class="row">
        <div class="label">Номер телефону:</div>
        <div class="info">+1234567890</div>
      </div>
      <div className="label">Історія покупок:</div>
      <div className="info">
        {user?.orders
          ?.filter((order) => order.status === 'BOUGHT')
          .map((order) => (
            <div key={order.id}>
              <p>Назва книги: {order.orderDetails[0].bookTitle}</p>
              <p>Ціна: {order.orderDetails[0].bookPrice}</p>
              <p>Дата покупки: {order.date}</p>
              <hr/>
            </div>
          ))}
      </div>
    </div>
    <div className="footer-text">*Інформація про конвертування балів</div>
  </>)
}
