import { useState } from "react";
import styles from "./ItemCard.module.css"
export function ItemCard({prod, addToCart}){
    //add on click for addtocart
    const [counter, setCounter] = useState(1);
    
    function incItem(){
        setCounter(prev => prev + 1);
    }
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
                <button className="addToCart" onClick={() => addToCart(prod.id, counter)}> {prod.inCart ? "Update Cart" : "Add to Cart"}</button>
                <div className={styles.incrementer}>
                    <button className="decrement" onClick={decItem}>-</button>
                    <p>{counter}</p>
                    <button className="increment" onClick={incItem}>+</button>
                </div>
            </div>
        </div>
    )
}