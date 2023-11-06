import axios from "axios";

  export const sendUserData = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData);
      // const token = response.data.token;
      // localStorage.setItem('token', token);// Сохранение токена в локальном хранилище браузера
      return response; // Возвращаем результат, чтобы его можно было обработать в вызывающем коде
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      throw error; // Обработка ошибок, если они возникли при отправке данных на сервер
    }
  };

  export const checkUserAuth = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', userData);
      return response;
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      throw error; // Обработка ошибок, если они возникли при отправке данных на сервер
    }
  };

  export const checkTokenValidity = async (token) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/checkToken', { token });
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const extractRoleFromToken = async (token) => {
    if (!token) {
      return null; 
    }
  
    try {
      const tokenParts = token.split('.'); // Разделение токена на части
      if (tokenParts.length < 2) {
        throw new Error('Invalid token'); 
      }
  
      const payload = JSON.parse(atob(tokenParts[1])); // Декодирование и разбор полезной нагрузки
      const role = payload.role; // Извлечение информации о роли из полезной нагрузки
  
      return role; 
    } catch (error) {
      console.error('Error extracting role from token', error);
      return null; 
    }
  }