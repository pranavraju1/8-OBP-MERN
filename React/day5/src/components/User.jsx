import { useState } from "react"

const User = () => {
    
    const [student, setStudent] = useState({name: 'pranav', age: 20, city: 'Mumbai', marks: 50})
    
    const updateCity = () => {
        // let obj = {name: 'pranav', age: 20, city: 'Pune', marks: 50}
        // setStudent(obj);

        setStudent((prev) => ({...prev, city: "Pune"}))
    
    }

    return (
    <div>
      <h2>Name: {student.name}</h2>
      <h2>Age: {student.age}</h2>
      <h2>City: {student.city}</h2>
      <h2>Marks: {student.marks}</h2>

      <button onClick={updateCity}> Update city to Pune </button>
      <button> Increase marks by 20 </button>
    </div>
  )
}

export default User
