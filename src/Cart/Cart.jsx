import { useOutletContext } from "react-router";

export function Cart({products}){
    const {products, setProducts, } = useOutletContext();

    function removeFromCart(id){
        setProducts(prev => {
            const newProdArr = prev.map(prod => prod.id == id ? {...prod, inCart: false, quantity: 0} : prod)
            return newProdArr;
        })
    }

    return (
        <div className="cartPage">
            {products.map(prod => (
                <cartItem key={prod.id} prod={prod}/>
            ))}
        </div>
    )
}