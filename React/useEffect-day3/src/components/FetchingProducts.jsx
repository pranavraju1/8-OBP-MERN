// https://fakestoreapi.com/products
// in a list show the title of the product and its title

import { useEffect, useState } from "react";


const FetchingProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchproducts = async() => {
            setLoading(true);
            setError(null);
            try{
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                console.log(data)
                setProducts(data);
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchproducts();
    },[])

    
    if(loading) return <h1>Loding....</h1>

    if(error) return <h1>{error}</h1>

    return (
    <div>
        <ul>
            {products.map(item => <li key={item.id}>{item.title} {item.price}</li>)}
        </ul>
    </div>

  )
}

export default FetchingProducts
