import { createContext, useEffect, useState } from "react"

export const productContext = createContext(null);


const ProductProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true)
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                console.log(data.products)
                setData(data.products)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }

        }
        fetchData()
    },[])

  return (
    <productContext.Provider value={{data, loading, error}}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider
