import axios from "axios";

  export const sendUserData = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', userData);
      const token = response.data.token;
      localStorage.setItem('token', token);// Сохранение токена в локальном хранилище браузера
      return response; // Возвращаем результат, чтобы его можно было обработать в вызывающем коде
    } catch (error) {
      console.error('Ошибка при отправке данных на сервер:', error);
      throw error; // Обработка ошибок, если они возникли при отправке данных на сервер
    }
  };
