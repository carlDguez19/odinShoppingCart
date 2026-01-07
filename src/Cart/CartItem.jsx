import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./CartItem.module.css"

export function CartItem({prod, removeFromCart}){
    const {setTotItems, products, setProducts} = useOutletContext();
    const [counter, setCounter] = useState(prod.quantity);

    function incItem(){
        setCounter(prev => prev + 1);
        //add code here to alter the quant value of prod and update
        setProducts(prev =>
            prev.map(item =>
                item.id === prod.id ? ({...item, quantity: item.quantity+1}): item
            )
        );
        setTotItems(prev => prev+1);
    }
    function decItem(){
        setCounter(prev => prev > 1 ? prev - 1 : prev);
        //add code here to alter the quant value of prod and update
        setProducts(prev =>
            prev.map(item =>
                item.id === prod.id ? {...item, quantity: item.quantity-1} : item
            )
        );
        setTotItems(prev => prev -1);
    }

    return(
        <div className={styles.cartItem}>
            <div className={styles.cartImgCont}>
                <img src={prod.image} alt={prod.title} />
            </div>
            <h3>{prod.title}</h3>
            <h3>{prod.price}</h3>
            <div className={styles.cartInput}>
                <button className={styles.remFromCart} onClick={() => removeFromCart(prod.id)}>Remove from cart</button>
                <div className={styles.incrementer}>
                    <button className="decrement" onClick={decItem}>-</button>
                    <p>{counter}</p>
                    <button className="increment" onClick={incItem}>+</button>
                </div>
            </div>
        </div>
    )
}