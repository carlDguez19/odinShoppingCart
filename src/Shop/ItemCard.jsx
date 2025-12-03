export function ItemCard({prod, addToCart}){
    //add on click for addtocart
    const [counter, setCounter] = useState(1);
    
    function incItem(){
        setCounter(prev => prev + 1);
    }
    function decItem(){
        setCounter(prev => prev - 1);
    }

    return(
        <div className="itemCard">
            <div className="imageCont">
                <img src={prod.image} alt={prod.title} />
            </div>
            <h3>{prod.title}</h3>
            <p className="description">{prod.description}</p>
            <h3>{prod.price}</h3>
            <button className="addToCart" onClick={() => addToCart(prod.id, counter)}>Add To Cart</button>
            <div className="incrementer">
                <button className="decrement" onClick={decItem}>-</button>
                <p>{counter}</p>
                <button className="increment" onClick={incItem}>+</button>
            </div>
        </div>
    )
}