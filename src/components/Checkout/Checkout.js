import React, {useState} from 'react'
import './checkout.css';
import Modal from '../../components/littlePiece/Modal';
import {useSelector} from 'react-redux';
import {calcTotalPrice} from '../../utils/util';
import {OrderItem} from './order-item/OrderItem';
import {HOME_ROUTE} from '../../utils/consts';
import {Link} from 'react-router-dom';
import './checkout-modal.css';
import {createOrder} from "../../http/userAPI";

export const Checkout = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (e) => {

    setShowModal(false);
  };

  const handleModal = (e) => {
    e.preventDefault();
    const formData = {
      city: document.getElementById('city').value,
      street: document.getElementById('street') === null ? '' : document.getElementById('street').value,
      houseNumber: document.getElementById('houseNumber') === null ? '' : document.getElementById('houseNumber').value,
      apartment: document.getElementById('apartment') === null ? '' : document.getElementById('apartment').value,
      branchNumber: document.getElementById('branchNumber') == null ? '' : document.getElementById('branchNumber').value,
      delivery: document.getElementById('delivery').value,
      payment: document.getElementById('payment').value,
      cardNumber: document.getElementById('cardNumber') == null ? '' : document.getElementById('cardNumber').value,
      expirationYear: document.getElementById('expirationYear') == null ? '' : document.getElementById('expirationYear').value,
      expirationMonth: document.getElementById('expirationMonth') == null ? '' : document.getElementById('expirationMonth').value,
      cvv: document.getElementById('cvv') == null ? '' : document.getElementById('cvv').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      bookId: items[0].id,
      quantity: 1
    };

    var response = createOrder(formData)
      .then((data) => {
          if (data.status === 201 || data.status === 200) {
            setShowModal(true);
          }
        }
      )
  };


  const [deliveryOption, setDeliveryOption] = useState('courier');
  const [paymentOption, setPaymentOption] = useState('cash');

  const handleDeliveryChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPaymentOption(e.target.value);
  };

  if (items.lenght < 1) {
    return <h1>Ваша корзина пуста</h1>
  }

  return (
    <>
      <h1>Корзина</h1>
      <hr></hr>
      <div className='checkout-page'>
        <div className='checkout-page__left'>
          {items.map(book => <OrderItem book={book}/>)}
        </div>
        <h1>Оформлення замовлення</h1>
        <hr></hr>
        <div className='checkout-page__forms'>
          <form className="checkout-page__form">
            <div className="checkout-page__form-container">
              <div className="checkout-page__form-component">
                <h2>Інформація про доставку</h2>

                <div className="checkout-page__form-block">
                  <label htmlFor="city">Місто:</label>
                  <input className="input-reg" type="text" id="city" name="city" placeholder="Введіть місто..."/>
                </div>

                <div className="checkout-page__form-block">
                  <label htmlFor="delivery">Варіант доставки:</label>
                  <select className="input-reg" id="delivery" name="delivery" value={deliveryOption}
                          onChange={handleDeliveryChange}>
                    <option value="courier">Кур'єр</option>
                    <option value="nova poshta">Нова пошта</option>
                  </select>
                </div>

                {deliveryOption === 'nova poshta' ? (
                  <div className="checkout-page__form-block">
                    <label htmlFor="branchNumber">Номер відділення:</label>
                    <input
                      className="input-reg"
                      type="text"
                      id="branchNumber"
                      name="branchNumber"
                      placeholder="Введіть номер відділення..."
                    />
                  </div>
                ) : (
                  <>
                    <div className="checkout-page__form-block">
                      <label htmlFor="street">Вулиця:</label>
                      <input className="input-reg" type="text" id="street" name="street"
                             placeholder="Введіть вулицю..."/>
                    </div>

                    <div className='checkout-page__houseNumber-apartment'>
                      <div className="checkout-page__form-block">
                        <label htmlFor="houseNumber">Дім:</label>
                        <input className="input-reg" type="text" id="houseNumber" name="houseNumber"
                               placeholder="Введіть дім..."/>
                      </div>

                      <div className="checkout-page__form-block">
                        <label htmlFor="apartment">Кв:</label>
                        <input className="input-reg" type="text" id="apartment" name="apartment"
                               placeholder="Введіть  кв..."/>
                      </div>
                    </div>
                  </>
                )}

                <div className='checkout-page__bonuses'>
                  <div className="checkout-page__form-block">
                    <label htmlFor="bonuses">Бонуси:</label>
                    <input className="input-reg" type="text" id="bonuses" name="bonuses"
                           placeholder="Введіть бонуси..."/>
                  </div>
                  <p>У вас на рахунку 0 бонусів</p>
                </div>

                <div className="checkout-page__form-block">
                  <label htmlFor="payment">Оплата:</label>
                  <select className="input-reg" id="payment" name="payment" value={paymentOption}
                          onChange={handlePaymentChange}>
                    <option value="cash">Готівка</option>
                    <option value="card payment">Карта</option>
                  </select>
                </div>

                {paymentOption === 'card payment' && (
                  <>
                    <div className="checkout-page__form-block">
                      <label htmlFor="cardNumber">Номер карти:</label>
                      <input
                        className="input-reg"
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="Введіть номер карти..."
                      />
                    </div>

                    <div className='checkout-page__expirationDate-cvv'>

                      <div className="checkout-page__form-block cvv">
                        <label htmlFor="expirationYear">Рік закінчення</label>
                        <input  className="input-reg" type="text" id="expirationYear" name="expirationYear"
                                placeholder="Введіть рік..." pattern="[0-9]*" title="Можна вводити тільки цифри" required/>
                      </div>
                      <br/>
                      <div className="checkout-page__form-block cvv">
                        <label htmlFor="expirationMonth">Місяць закінчення:</label>
                        <input  className="input-reg" type="text" id="expirationMonth" name="expirationMonth"
                                placeholder="Введіть місяць цифрою..." pattern="[0-9]*" title="Можна вводити тільки цифри" required />
                      </div>

                      <div className="checkout-page__form-block cvv">
                        <label htmlFor="cvv">CVV:</label>
                        <input  className="input-reg"type="text" id="cvv" name="cvv"
                                placeholder="Введіть CVV..." pattern="[0-9]*" title="Можна вводити тільки цифри" required/>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="checkout-page__form-component">
                <h2>Особисті дані</h2>

                <div className="checkout-page__form-block">
                  <label htmlFor="phone">Номер телефону:</label>
                  <input className="input-reg" type="tel" id="phone" name="phone" placeholder="+380"/>
                </div>

                <div className="checkout-page__form-block">
                  <label htmlFor="email">Електронна пошта:</label>
                  <input className="input-reg" type="email" id="email" name="email" placeholder="Введіть email"/>
                </div>

                <div className='checkout-page__right'>
                  <div className='checkout-page__total-price'>
                    <div className='checkout-page__text'>
                      Сума до сплати: {calcTotalPrice(items)} грн.
                    </div>
                    <div className='checkout-page__text'>
                      Сума зі знижкою: {calcTotalPrice(items)} грн.
                    </div>
                    <div className='checkout-page__text'>
                      Нараховано бонусів: 50
                    </div>
                  </div>
                  <input className='btn' type="submit" value="Замовити" onClick={handleModal}></input>
                </div>

              </div>
            </div>

          </form>
          {showModal && (
            <Modal onClose={handleCloseModal}>
              <h2> Замовлення підтверджено!</h2>
              <p>Свою історію покупок ви можете переглянути в особистому кабінеті.</p>
              <p>Перейти на <Link to={HOME_ROUTE}>ОСОБИСТУ СТОРІНКУ</Link></p>
            </Modal>
          )}
        </div>
      </div>

    </>
  )
}
