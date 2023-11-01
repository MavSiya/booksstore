import React, { useState } from 'react';

import axios from 'axios';
import { sendUserData } from '../http/userAPI';

function Registrforms(props) {
  
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        password: ''
        
      });
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await sendUserData(formData);
          if (response.status === 200) {
           
          }
        } catch (error) {
          console.error('Registration failed', error);
        }
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleNameChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({ ...prevData, firstname: value }));
      };
      
      const handleLastNameChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({ ...prevData, lastname: value }));
      };
     
    return (
<>

<form className="form-registration" onSubmit={handleFormSubmit}> 
    <div className="form-container">
    <div className="form-component">
    <div className="form-block">
        <label htmlFor="name">Ім'я:</label>
        <input className="input-reg" type="text" id="name" name="name" placeholder="Введіть ваше ім'я"  value={formData.firstname}
        onChange={handleNameChange}/>
    </div>
    <div className="form-block">
        <label htmlFor="name">Прізвище:</label>
        <input className="input-reg" type="text" id="surname" name="surname" placeholder="Введіть ваше прізвище" value={formData.lastname}
        onChange={handleLastNameChange}/>
    </div>
    <div className="form-block">
  <label htmlFor="role">Выберите вашу роль:</label>
  <select className="input-reg" id="role" name="role"  value={formData.role}
        onChange={handleInputChange}>
    <option value="seller">Продавец</option>
    <option value="buyer">Покупатель</option>
  </select>
</div>
</div>

<div className="form-component">
    <div className="form-block">
        <label htmlFor="email">Електронна пошта:</label>
        <input className="input-reg" type="email" id="email" name="email" placeholder="Введіть ваш email" value={formData.email}
        onChange={handleInputChange}/>
    </div>
    <div className="form-block">
        <label htmlFor="password">Пароль:</label>
        <input className="input-reg" type="password" id="password" name="password" placeholder="Введіть пароль" value={formData.password}
        onChange={handleInputChange}/>
    </div>
    </div>
    </div>
    <input className='btn' type="submit" value="Зареєструватись"></input>
</form>

</>
)
}
    
    export default Registrforms;