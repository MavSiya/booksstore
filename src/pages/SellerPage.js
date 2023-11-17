import React from 'react'
import BooksList from '../components/Books/BooksList'
import Sellerpage from '../FileCSS/Sellerpage.css'

export default function SellerPage() {

  return (
    <>
    <h1>Ім'я продавця</h1>
    <hr></hr>
    <div className='container-seller-page'>
      <div>
    <h2 className='h2-sellerpage'> Наявний товар:</h2>
    <BooksList/>
    </div>

    <div className='block-phone'>
    <button type="button" className="btn-phone"><span className='phone-icon'></span></button>
<p>Номер телефону: +380978608489</p>
    </div>

    </div>

    </>
  )
}
