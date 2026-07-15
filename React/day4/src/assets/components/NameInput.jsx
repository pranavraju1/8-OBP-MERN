import { useState } from "react"

const NameInput = () => {
    console.log("name input is rendering")
    
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);

    const handleClick = () => {
            setUsers([...users, name]);
    }
  return (
    <div>
        <input 
            type="text"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Add name</button>
        <ul>
            {users.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
  )
}

export default NameInput
