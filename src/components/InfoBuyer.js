import React from 'react'
import './Info.css';

export default function InfoBuyer() {
  return (
    <>
    <div class="column">
  <div class="row">
    <div class="label">Покупець</div>
  </div>
  <div class="row">
    <div class="label">Ім'я:</div>
    <div class="info">Иван</div>
  </div>
  <div class="row">
    <div class="label">Прізвище:</div>
    <div class="info">Иванов</div>
  </div>
  <div class="row">
    <div class="label">Пошта:</div>
    <div class="info">ivanov@example.com</div>
  </div>
  <div class="row">
    <div class="label">Бонуси:</div>
    <div class="info">100</div>
  </div>
  <div class="row">
    <div class="label">Номер телефону:</div>
    <div class="info">+1234567890</div>
  </div>
  <div class="row">
    <div class="label">Історія покупок:</div>
    <div class="info">...</div>
  </div>
</div>
<div className="footer-text">*Інформація про конвертування балів</div>
    </>
  )
}
