import React from 'react'


export default function Auth() {
  
  return (
    <>
    <div className='card-auth'>
        <h1>Авторизація</h1>
        <hr></hr>
  <form className='form-auth' action="/login" method="post">
 <div>
 <input className="input-full" type="email" id="email" name="email" placeholder="Введіть ваш email"/><br/><br/>
 </div>
 <div>
 <input className="input-full" type="password" id="password" name="password" placeholder="Введіть ваш пароль"/><br/><br/>
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
