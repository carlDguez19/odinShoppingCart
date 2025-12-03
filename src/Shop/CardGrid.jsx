import { ItemCard } from "./ItemCard"
import styles from "./CardGrid.module.css"

export function CardGrid({products, addToCartClick}){
    return(
        <div className={styles.cardGrid}>
            {products.map(prod => {
                <ItemCard key={prod.id} prod={prod} addToCart={addToCartClick}/>
            })}
        </div>
    )
}