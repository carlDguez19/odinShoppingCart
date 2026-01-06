import { useState } from "react";

export function CartItem({prod, removeFromCart}){

    const {counter, setCounter} = useState(prod.quant);

    function incItem(){
        setCounter(prev => prev + 1);
        //add code here to alter the quant value of prod and update
    }
    function decItem(){
        setCounter(prev => prev > 1 ? prev - 1 : prev);
        //add code here to alter the quant value of prod and update
    }

    return(
        <div className="cartItem">
            <div className="cartImgCont">
                <img src={prod.image} alt={prod.title} />
            </div>
            <h3>{prod.title}</h3>
            <h3>{prod.price}</h3>
            <div className={styles.cartInput}>
                <button className="remFromCart" onClick={() => removeFromCart(prod.id)}>Remove from cart</button>
                <div className={styles.incrementer}>
                    <button className="decrement" onClick={decItem}>-</button>
                    <p>{counter}</p>
                    <button className="increment" onClick={incItem}>+</button>
                </div>
            </div>
        </div>
    )
}