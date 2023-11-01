import React from 'react'

export default function Catalog() {
  return (
    <div className='catalog-container'>
        <h1>Каталог</h1>
        <div className='filter-search-container'>
            <div className='filter-container'>
                <img src="./img/filter.png" alt="Фільтр" className='filter-icon' />
                     <p>Фільтр</p>
             </div>
                <div className='search-container'>
                 <input type="text" placeholder="Пошук" className='search-input' />
                </div>
      </div>
    </div>
  )
}
