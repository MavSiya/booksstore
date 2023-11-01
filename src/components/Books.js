function Books(props) {
return (
<div className="books-block">
<img src={props.image} alt="" />
<p>{props.title}</p>
<p>{props.cost}</p>
<button className="add-to-cart" data-key={props.id}>Add to cart</button>
</div>
);
}

export default Books;