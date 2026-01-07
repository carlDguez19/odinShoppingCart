import { useOutletContext } from "react-router";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css"

export function Cart(){
    const {setTotItems, products, setProducts} = useOutletContext();
    console.log(products);
    function removeFromCart(id){
        setProducts(prev => {
            const newProdArr = prev.map(prod => prod.id === id ? {...prod, inCart: false, quantity: 0} : prod)
            return newProdArr;
        })
    }

    return (
        <div className={styles.cartPage}>
            {products.filter(prod => prod.inCart)
            .map(prod => (
                <CartItem key={prod.id} prod={prod} removeFromCart={removeFromCart}/>
            ))}
        </div>
    )
}