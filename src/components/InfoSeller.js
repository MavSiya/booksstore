import React, {useEffect} from 'react'
import './Info.css';
import {getCurrentUserInfo} from "../http/userAPI";

export default function InfoSeller() {

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

  return (
       <>
    <div className="column">
    <div class="row">
    <div class="label">Продавець</div>
  </div>
  <div className="row">
    <div class="label">Ім'я:</div>
    <div className="info">{user?.firstName}</div>
  </div>
  <div className="row">
    <div class="label">Прізвище:</div>
    <div className="info">{user?.lastName}</div>
  </div>
  <div className="row">
    <div className="label">Пошта:</div>
    <div className="info">{user?.email}</div>
  </div>
  <div className="row">
    <div className="label">Бонуси:</div>
    <div className="info">{user?.bonusesAmounts}</div>
  </div>
  <div className="row">
    <div className="label">Номер телефону:</div>
    <div class="info">+1234567890</div>
  </div>
  {/*<div class="row">*/}
  {/*  <div class="label">Історія покупок:</div>*/}
  {/*  <div class="info">...</div>*/}
  {/*</div>*/}
  {/*<div class="row">*/}
  {/*  <div class="label">Історія продажу:</div>*/}
  {/*  <div class="info">...</div>*/}
  {/*</div>*/}
</div>
    </>
  )
}
