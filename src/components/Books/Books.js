import './BooksCard.css'; 

function Books(props) {
return (
    <div className='card'>
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
<button className="add-to-cart" data-key={props.articul}><span className='add-to-card-icon'></span></button>
</div>
</div>
</div>
</div>
</div>
);
}

export default Books;