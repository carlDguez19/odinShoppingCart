import { ItemCard } from "./ItemCard"

export function CardGrid({products, addToCartClick}){
    return(
        <div className="cardGrid">
            {products.map((prod) => {
                //create itemCards here
                <ItemCard prod={prod} addToCart={addToCartClick}/>
            })}
        </div>
    )
}