import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react"
import { CardGrid } from "./CardGrid";

export function Shop(){
    const {setTotItems, products, setProducts} = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("here urs products ",products);
        async function fetchProducts(){
            try{
                setLoading(true);
                const res = await fetch('https://fakestoreapi.com/products');
                if(!res.ok){
                    throw new Error(`HTTP error. status: ${res.status}`);
                }
                const data = await res.json();
                setProducts(prev => {
                    if(prev.length > 0) return prev;
                    return data.map(item => ({
                        ...item,
                        inCart: false,
                        quantity: 0,
                    }));
                });
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);

    if(loading){
        return <h2>products loading... please wait</h2>;
    }
    if(error){
        return <h2>Error fetching products: {error}</h2>;
    }
    
    function addToCartClick(id, quant){
        setProducts(prev => {
            const updated = prev.map(prod =>
                prod.id == id ? {...prod, inCart: true, quantity: quant} : prod
            )

            const total = updated.reduce(
                (acc, prod) => acc + (prod.inCart ? prod.quantity : 0), 0
            );
            setTotItems(total);
            return updated;
        });
    }

    return(
        <div className="shop">
            <CardGrid products={products} addToCartClick={addToCartClick}/>
        </div>
    )
}