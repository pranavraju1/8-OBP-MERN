import React, { useState } from 'react'

const StudentDetails = () => {
    const [student, setStudet] = useState({name:"pranav", age: 20});

    const handleClick = () => {
        setStudet((prev) => ({...prev, age: 25}))
    }

    const nameChange = (e) =>{
        console.log(e.target.value)
        setStudet((prev) => ({...prev, name: e.target.value}))
    }
  return (
    <div>
        <h2>Name: {student.name}</h2>
        <h2>Age: {student.age}</h2>
        <button onClick={handleClick}>Upadate age to 25</button>

        <input type="text" placeholder='enter name' onChange={nameChange} />

    </div>
  )
}

export default StudentDetails
