import React, { useEffect, useState } from 'react'
const FetchDynamixData = () => {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await res.json();
            console.log(data)
            setUser(data);
        }
        fetchData();
    },[userId])

  return (
    <div>
      <input type="text" placeholder='enter user id' onChange={(e)=>setUserId(e.target.value)} />
        {user ? <h1>User id: {user.id} , UseName: {user.name}</h1> : ""}
    </div>
  )
}

export default FetchDynamixData
