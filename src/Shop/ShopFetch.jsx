import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react"
import { CardGrid } from "./CardGrid";

export function Shop(){
    //Access shared state from App.jsx(products array + cart total updater)
    const {setTotItems, products, setProducts} = useOutletContext();

    //Local UI state for loading/error handling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Fetch product list from API on first render
        async function fetchProducts(){
            try{
                setLoading(true);

                //Request product data from fakestore api
                const res = await fetch('https://fakestoreapi.com/products');
                if(!res.ok){
                    throw new Error(`HTTP error. status: ${res.status}`);
                }

                const data = await res.json();
                
                //set products if they havent been loaded
                setProducts(prev => {
                    if(prev.length > 0) return prev;
                    
                    //add extra info to each item(cart info)
                    return data.map(item => ({
                        ...item,
                        inCart: false,
                        quantity: 0,
                    }));
                });
            }catch(err){
                //UI error message
                setError(err.message);
            }finally{
                //Stop loading message
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);//run on mount

    if(loading){
        return <h2>products loading... please wait</h2>;
    }
    if(error){
        return <h2>Error fetching products: {error}</h2>;
    }
    
    //Add item to cart and update total item count
    function addToCartClick(id, quant){
        setProducts(prev => {//get previous products
            const updated = prev.map(prod =>//go through each one change its quantity and inCart value
                prod.id == id ? {...prod, inCart: true, quantity: quant} : prod
            )

            const total = updated.reduce(//change total items count
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