import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./CartItem.module.css"

export function CartItem({prod, removeFromCart}){
    //Access global cart state and updater functions
    const {setTotItems, products, setProducts} = useOutletContext();
    
    //Local display state for this item's quantity
    const [counter, setCounter] = useState(prod.quantity);

    //Increase quantity in both local state and global products array
    function incItem(){
        setCounter(prev => prev + 1);
        
        //alter the quant value of prod and update
        setProducts(prev =>
            prev.map(item =>
                item.id === prod.id ? ({...item, quantity: item.quantity+1}): item
            )
        );

        //Increase total cart item count
        setTotItems(prev => prev+1);
    }

    //Decrease quantity (never below 1) and update global state
    function decItem(){
        setCounter(prev => prev > 1 ? prev - 1 : prev);
        
        //alter the quant value of prod and update
        setProducts(prev =>
            prev.map(item =>
                item.id === prod.id ? {...item, quantity: item.quantity-1} : item
            )
        );

        //Decrease total cart item count(never below 1)
        setTotItems(prev => prev > 1 ? prev - 1 : prev);
    }

    return(
        <div className={styles.cartItem}>
            <div className={styles.cartImgCont}>
                <img src={prod.image} alt={prod.title} />
            </div>
            <h3>{prod.title}</h3>
            <h3>{prod.price}</h3>
            <div className={styles.cartInput}>
                {/* Remove item from cart */}
                <button className={styles.remFromCart} onClick={() => removeFromCart(prod.id)}>Remove from cart</button>
                
                {/* Quantity controls for this cart item */}
                <div className={styles.incrementer}>
                    <button className="decrement" onClick={decItem}>-</button>
                    <p>{counter}</p>
                    <button className="increment" onClick={incItem}>+</button>
                </div>
            </div>
        </div>
    )
}