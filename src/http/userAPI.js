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
    const response = await axios.post('http://localhost:8080/api/v1/auth/checkToken', {token});
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
    // Извлечение информации о роли из полезной нагрузки
    return payload.role;
  } catch (error) {
    console.error('Error extracting role from token', error);
    return null;
  }
}

export const extractUserInfoFromToken = (token) => {
  if (!token) {
    return null;
  }

  try {
    const tokenParts = token.split('.');
    if (tokenParts.length < 2) {
      throw new Error('Invalid token');
    }

    const payload = JSON.parse(atob(tokenParts[1]));
    return payload;
  } catch (error) {
    console.error('Error extracting user info from token', error);
    return null;
  }
}

export const getCurrentUserInfo = async () => {
  let token = localStorage.getItem('token');
  if (token == null)
    return null;

  try {
    const response = axios.get('http://localhost:8080/api/v1/me', {
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
      }
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const postBook = async (bookInfo) => {
  try {
    var token = localStorage.getItem('token');
    if (token == null)
      return null;

    let seller = extractUserInfoFromToken(token);
    const response = await axios.post(`http://localhost:8080/api/v1/sellers/${seller.id}/books`, {
        title: bookInfo.title,
        author: bookInfo.author,
        price: bookInfo.price,
        description: bookInfo.description,
        quantity: 1,
        image: bookInfo.image,
        genre: bookInfo.genre
      },
      {
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "multipart/form-data",
        }
      });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const editBook = async (bookInfo) => {
  try {
    var token = localStorage.getItem('token');
    if (token == null)
      return null;

    var sellerId = extractUserInfoFromToken(token).id;

    const response = await axios.put(`http://localhost:8080/api/v1/sellers/${sellerId}/books/${bookInfo.id}`, {
      title: bookInfo.title,
      author: bookInfo.author,
      price: bookInfo.price,
      description: bookInfo.description,
      quantity: 1,
      image: bookInfo.image instanceof File ? bookInfo.image : null,
      genre: bookInfo.genre
    }, {
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "multipart/form-data",
      }
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const getAllBooks = async (reqName, reqParam) => {
  try {
    var token = localStorage.getItem('token');
    if (token == null)
      return null;

    var request = `http://localhost:8080/api/v1/books`;
    if (reqName != null && reqParam != null) {
      request += `?${reqName}=${reqParam}`;
    }

    const response = await axios.get(request, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const getCommentsByBookId = async (bookId) => {

}

export const addComment = async (bookId ,comment) => {
  try {
    var token = localStorage.getItem('token');
    if (token == null)
      return null;

    var request = `http://localhost:8080/api/v1/books/comments`;

    const response = await axios.post(request, {
      bookId: bookId,
      comment: comment
    }, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const deleteCommentByBookId = async (commentId) => {
  try {
    var token = localStorage.getItem('token');
    if (token == null)
      return null;

    var request = `http://localhost:8080/api/v1/books/comments/${commentId}`;

    const response = await axios.delete(request, {
      headers: {
        "Authorization": "Bearer " + token,
      }
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const createOrder = async (orderItem) => {
  const token = localStorage.getItem('token');
  if (token == null)
    return null;

  var request = `http://localhost:8080/api/v1/orders`;

  var body = {}

  if (orderItem.delivery === "courier") {
    body = {
      "city": orderItem.city,
      "street": orderItem.street,
      "houseNumber": orderItem.houseNumber,
      "apartmentNumber": orderItem.apartment,
      "deliveryType": "COURIER",
      "paymentType": orderItem.payment === "cash" ? "CASH" : "CREDIT_CARD",
      "email": orderItem.email,
      "bookId": orderItem.bookId,
      "quantity": 1
    }

  } else if (orderItem.delivery === "nova poshta") {
    body = {
      "city": orderItem.city,
      "deliveryType": "NOVA_POSHTA",
      "department": orderItem.branchNumber,
      "paymentType": orderItem.payment === "cash" ? "CASH" : "CREDIT_CARD",
      "email": orderItem.email,
      "bookId": orderItem.bookId,
      "quantity": 1
    }
  }

  var response = await axios.post(request, body, {
    headers: {
      "Authorization": "Bearer " + token,
    }
  })
    .then(async (data) => {
      if (orderItem.payment === "card payment") {

        var payBody = {
          "orderID": data.data.id,
          "creditCard": {
            "number": orderItem.cardNumber,
            "expirationMonth": orderItem.expirationMonth,
            "expirationYear": orderItem.expirationYear,
            "cvv": orderItem.cvv
          }
        }

        const response2 = await axios.post(`http://localhost:8080/api/v1/pay`, payBody, {
          headers: {
            "Authorization": "Bearer " + token,
          }
        }).then((data) => {
          return data;
        }).catch((error) => {
          console.error('Error:', error);
        });
      }

      return data;
    }).catch((error) => {
      console.error('Error:', error);
    });

  return response;
}


