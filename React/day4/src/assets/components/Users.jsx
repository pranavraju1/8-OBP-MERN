import { useState } from "react"

// task make this static code dynamic
const Users = () => {
    const [users, setUsers] = useState([]);
    
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleClick = () => {
        let obj = {name: name, age: age};
        // let obj = {name, age};
        setUsers([...users, obj]);
    }
    return (
    <div>
        <input type="text" placeholder=" enter name" onChange={(e)=>setName(e.target.value)} />
        
        <input type="text" placeholder=" enter age" onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={handleClick}>Add User</button>
        {
            users.map((item, index) => <li key={index}>Name: {item.name}, age: {item.age}</li>)
        }
    </div>
  )
}

export default Users
