import { useEffect, useState } from "react";
import { useNavigate } from "react-router"

const Home = () => {
  
  const [uniqueIds, setUniqueIds] = useState(null);

  useEffect(()=>{
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      localStorage.setItem("data", JSON.stringify(data))
      const userIds =  data.map((item) => item.userId)
      const uniqueUserIds = new Set(userIds)
      setUniqueIds(Array.from(uniqueUserIds))
    }
    fetchData();
  },[])

  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      {
        uniqueIds && 
        uniqueIds.map(item => <button key={item} onClick={() => navigate(`/posts/${item}`)}>{item}</button>)
      }
    </div>
  )
}

export default Home
