import React, { useState } from 'react';
import Modal from './littlePiece/Modal';
import { sendUserData } from '../http/userAPI';

function Registrforms(props) {
  
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
            setShowModal(true);
           console.log('Registration successfully');
          }
        } catch (error) {
          console.error('Registration failed', error);
        }
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
     
    return (
<>

<form className="form-registration" onSubmit={handleFormSubmit}> 
    <div className="form-container">
    <div className="form-component">
    <div className="form-block">
        <label htmlFor="firstname">Ім'я:</label>
        <input className="input-reg" type="text" id="firstname" name="firstname" placeholder="Введіть ваше ім'я"  value={formData.firstname}
        onChange={handleInputChange}/>
    </div>
    <div className="form-block">
        <label htmlFor="lastname">Прізвище:</label>
        <input className="input-reg" type="text" id="lastname" name="lastname" placeholder="Введіть ваше прізвище" value={formData.lastname}
        onChange={handleInputChange}/>
    </div>
    <div className="form-block">
  <label htmlFor="role">Выберите вашу роль:</label>
  <select className="input-reg" id="role" name="role"  value={formData.role}
        onChange={handleInputChange}>
    <option value="SELLER">Продавец</option>
    <option value="CUSTOMER">Покупатель</option>
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
{showModal && (
        <Modal onClose={handleCloseModal}>
          <h3> Дякуємо за реєстрацію!</h3>
          <p>Підтвердьте реєстрацію на пошті!</p>
        </Modal>
      )}
</>
)
}
    
    export default Registrforms;