import { useOutletContext } from "react-router";

export function Cart(){
    const {products, setProducts, } = useOutletContext();

    function removeFromCart(id){
        setProducts(prev => {
            const newProdArr = prev.map(prod => prod.id === id ? {...prod, inCart: false, quantity: 0} : prod)
            return newProdArr;
        })
    }

    function incItem(){
        setCounter(prev => prev + 1);
    }
    function decItem(){
        setCounter(prev => prev > 0 ? prev - 1 : prev);
    }

    return (
        <div className="cartPage">
            {products.filter(prod => prod.inCart)
            .map(prod => (
                <CartItem key={prod.id} prod={prod} removeFromCart={removeFromCart}/>
            ))}
        </div>
    )
}