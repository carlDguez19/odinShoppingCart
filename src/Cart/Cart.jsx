import { useOutletContext } from "react-router-dom";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css"

export function Cart(){
    const {setTotItems, products, setProducts} = useOutletContext();
    //console.log(products);

    function removeFromCart(id){
        let remItemQuantity = 0;
        const newProdArr = products.map(prod =>{//find product remember its quantity then change it to 0 along with inCart: false
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
        <div className={styles.cartPage} data-testid="cartPageDiv">
            {products.filter(prod => prod.inCart)
            .map(prod => (
                <CartItem key={prod.id} prod={prod} removeFromCart={removeFromCart}/>
            ))}
        </div>
    )
}