import { useOutletContext } from "react-router-dom";
import { CartItem } from "./CartItem";
import styles from "./Cart.module.css"

export function Cart(){
    //Access global cart state and updater functions from App.jsx
    const {setTotItems, products, setProducts} = useOutletContext();

    //Remove a product from the cart and update total item count
    function removeFromCart(id){
        let remItemQuantity = 0;
        
        //find product remember its quantity then change it to 0 along with inCart: false(reset quantity and status)
        const newProdArr = products.map(prod =>{
            if(prod.id === id){
                remItemQuantity = prod.quantity;//store quantity before clearing
                return {...prod, inCart: false, quantity: 0};
            }
            return prod;
        });

        //update global products array
        setProducts(newProdArr);

        //subtract removed quantity from total cart count
        setTotItems(prev => prev-remItemQuantity);
    }

    return (
        <div className={styles.cartPage} data-testid="cartPageDiv">
            {/* Render products in cart */}
            {products.filter(prod => prod.inCart)
            .map(prod => (
                <CartItem key={prod.id} prod={prod} removeFromCart={removeFromCart}/>
            ))}
        </div>
    )
}