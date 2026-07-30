import { useEffect, useState } from "react";
import { useParams } from "react-router"


const Posts = () => {

    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('data')) 

        const filteredData = data.filter(item => item.userId == id)

        setData(filteredData);
    },[])

    return (
    <div>
        <ul>
            {data.map((item) => <li key={item.id} >{item.title}:  {item.userId}</li>)}
        </ul>
    </div>
  )
}

export default Posts





function flattenObject(obj, parentKey = "", result = {}) {
  // Object.keys safely loops only over the object's own properties
  for (const key of Object.keys(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
