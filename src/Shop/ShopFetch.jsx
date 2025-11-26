import { useEffect, useState } from "react"
export function Shop(){
    return <h1>Were gonna go..... SHOPPING!!!</h1>

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts(){
            const prodArr = [];
            for(let i = 1; i <= 20; i++){
                fetch(`https://fakestoreapi.com/products/${i}`)
                .then(response => response.json())
                .then(data => prodArr.push(data));
            }
            const results = await Promise.all(prodArr);
            setProducts(results);
        }
        fetchProducts();
    },[])
}