import { useState } from "react";
import styles from "./ItemCard.module.css"
export function ItemCard({prod, addToCart}){
    //Local quantity state for this product card
    const [counter, setCounter] = useState(prod.quantity);
    
    //Increase selected quantity
    function incItem(){
        setCounter(prev => prev + 1);
    }

    //Decrese selected quantity but never below 0
    function decItem(){
        setCounter(prev => prev > 0 ? prev - 1 : prev);
    }

    return(
        <div className={styles.itemCard}>
            <div className={styles.imgCont}>
                <img src={prod.image} alt={prod.title} />
            </div>
            <h3>{prod.title}</h3>
            <p className={styles.desc}>{prod.description}</p>
            <h3>{prod.price}</h3>
            <div className={styles.cartInput}>
                {/* Add or update item in cart using the selected quantity */}
                <button className="addToCart" disabled={counter === 0} onClick={() => addToCart(prod.id, counter)}> {prod.inCart ? "Update Cart" : "Add to Cart"}</button>
                <div className={styles.incrementer}>
                    {/* Local quantity selector */}
                    <button className="decrement" onClick={decItem}>-</button>
                    <p>{counter}</p>
                    <button className="increment" onClick={incItem}>+</button>
                </div>
            </div>
        </div>
    )
}