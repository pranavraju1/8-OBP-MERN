import { useContext, useEffect, useState } from "react"
import { productContext } from "../context/ProductProvider"


const ProductList = () => {
    const {data, loading, error} = useContext(productContext)
    
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("lowToHigh");

    
    const handleSearch = (e) =>{
        setSearch(e.target.value)
    }
    const handleSort = (e) =>{
        setSort(e.target.value)
    }

    const filteredData =  data.filter((item) => item.title.toLowerCase().includes(search)).sort((a , b) => {
        if(sort == "lowToHigh"){
            return a.price - b.price
        }else if(sort == "highToLow"){
            return b.price - a.price
        }
    })

    return (
    <div>
      {loading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}

        <input type="text" onChange={handleSearch} />
        
        <select name="" id="" onChange={handleSort}>
            <option value="">Select Sort</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
        </select>

      {filteredData.length > 0 && 
        <ul>
            {filteredData.map(item => <li key={item.id}>{item.title} : {item.price}</li>)}
        </ul>
      }
    </div>
  )
}

export default ProductList
