import React from 'react'
import { useState } from 'react';
import { checkUserAuth } from '../http/userAPI';
import { CATALOG_ROUTE} from '../utils/consts'; 
import { useNavigate } from 'react-router-dom'


export default function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await checkUserAuth(formData);
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token);// сохранение токена в локальном хранилище
        navigate(CATALOG_ROUTE);
      }
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
    <div className='card-auth'>
        <h1>Авторизація</h1>
        <hr></hr>
  <form className='form-auth' action="/login" method="post" onSubmit={handleFormSubmit}>
 <div>
 <input className="input-full" type="email" id="email" name="email" placeholder="Введіть ваш email" value={formData.email}
        onChange={handleInputChange}/><br/><br/>
 </div>
 <div>
 <input className="input-full" type="password" id="password" name="password" placeholder="Введіть ваш пароль" value={formData.password}
        onChange={handleInputChange}/><br/><br/>
 </div>
 <div className='havent_akk'>
            <p>Немає акаунта? <a href="/registration">Зареєструйтесь!</a></p>
        </div>
        <input className='btn' type="submit" value="Увійти"></input>
  </form>
    </div>
    </>
  )
}
