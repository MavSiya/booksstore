import  { setCurrentBook }  from '../../reducers/booksSlice';
import {useNavigate} from 'react-router-dom';
import { deleteItemFromCart, setItemInCart } from '../../reducers/cartSlice';
import './BooksCard.css'; 
import { useDispatch, useSelector } from 'react-redux';


function Books(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
const items = useSelector(state => state.cart.itemsInCart);
const isItemInCart = useSelector(state => state.cart.itemsInCart.some(items => items.articul === props.articul));

const handleClick = (e) =>{
e.stopPropagation();
if(isItemInCart){
    dispatch(deleteItemFromCart(props.articul));
}else{
dispatch(setItemInCart(props));
}
};

const handlerGoToInfo = () => {
dispatch(setCurrentBook(props));
navigate(`/${props.articul}`);
};



return (
    <div className='card' onClick={handlerGoToInfo}>
<div className="books-block">
    <div className="image">
<img src={props.image} alt="" />
</div>
<div className="block-info">
    <div className="info-book">
<p className="title" data-tooltip={props.title}>{props.title}</p>
<p className="author">{props.author}</p>
<p className="genre">{props.genre}</p>
<p className="seller">Продавець: {props.seller}</p>
</div>
<div className="info-sale">
<div className="cost-to-basket">
<p className="cost">{props.cost} грн</p>
<button className="add-to-cart" data-key={props.articul} onClick={handleClick}>{isItemInCart ? <img src="./img/delete-line.svg" alt="Удалить" /> : <img src="./img/basketicon.svg" alt="В корзину" />}</button>
</div>
</div>
</div>
</div>
</div>
);
}

export default Books;