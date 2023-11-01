import React from 'react'
import './Info.css';


export default function GoodsOfSeller() {
  return (
    <>
<h2> Наявний товар:</h2>
<div className='container-product'> 
<div className='edit-product'>
<div className='block-of-cards'>
    <div className='card'>Карточка</div>
    <div className='card'>Карточка</div>
    <div className='card'>Карточка</div>
     </div>
     <p>Редагувати товар</p>
     </div>
     <button className='btn'>Додати товар</button>
     </div>
     <div className="footer-text">*Інформація про конвертування балів</div>
    </>
  )
}
