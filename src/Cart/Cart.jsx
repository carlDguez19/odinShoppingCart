import { useOutletContext } from "react-router";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css"

export function Cart(){
    const {setTotItems, products, setProducts} = useOutletContext();
    //console.log(products);

    function removeFromCart(id){
        let remItemQuantity = 0;
        const newProdArr = products.map(prod =>{
            if(prod.id === id){
                remItemQuantity = prod.quantity;
                return {...prod, inCart: false, quantity: 0};
            }
            return prod;
        });
        setProducts(newProdArr);
        setTotItems(prev => prev-remItemQuantity);
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