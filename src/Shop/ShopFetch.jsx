import { useEffect, useState } from "react"
export function Shop(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            try{
            const prodArr = [];
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
            }catch(err){
                console.error("error getting products: ", err);
            }
        }
        fetchProducts();
    },[]);
    
    return <h1>Were gonna go..... SHOPPING!!!</h1>
    
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