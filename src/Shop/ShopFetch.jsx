import { useEffect, useState } from "react"
export function Shop(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts(){
            try{
                setLoading(true);
                const res = await fetch('https://fakestoreapi.com/products');
                if(!res.ok){
                    throw new Error(`HTTP error. status: ${res.status}`);
                }
                const data = await res.json();
                const enrichedData = data.map(item => ({
                    ...item,
                    inCart: false,
                    quantity: 0,
                }))
                setProducts(enrichedData);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);

    if(loading){
        <h2>products loading... please wait</h2>;
    }
    if(error){
        <h2>Error fetching products: {error}</h2>;
    }
    
    function addToCartClick(id, quant){
        setProducts(
            products.map(prod => {
                prod.id == id ? {...prod, inCart: true, quantity: quant} : prod
            })
        )
    }

    return <h1>Were gonna go..... SHOPPING!!!</h1>
    //ill call the cardGrid here and pass the products as a prop 
    // which in turn, it(cardGrid) will use to generate each itemCard
    
    // useEffect(() => {
    //     async function fetchProducts(){
    //         try{
    //             const prodArr = [];
    //             for(let i = 1; i <= 20; i++){
    //                 prodArr.push(fetch(`https://fakestoreapi.com/products/${i}`).then(response => response.json()));
    //             }
            
    //             const results = await Promise.all(prodArr);
    //             setProducts(results);
    //         }catch(err){
    //             console.log("error fetching products: ", err);
    //         }
    //     }
    //     fetchProducts();
    // },[])
}