import { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    // console.log the value of formData
    function handleSubmit(e) { 
        e.preventDefault();
        console.log("Student Details", formData)
    }

    // const handleEmail = (e) =>{
    //     setFormData((prev) => ({...prev, email: e.target.value}))
    // }

    // const handlePassword = (e) =>{
    //     setFormData((prev) => ({...prev, password: e.target.value}))
    // }

    const handleChange = (e) => {
        // console.log(e)
        const value = e.target.value;
        const name = e.target.name
        setFormData((prev) => ({...prev, [name]: value}))
    }

  return (
    <form onSubmit={handleSubmit}> 
        <input 
            type="email"
            name="email" 
            placeholder="Enter email" 
            onChange={handleChange} /> 

        <input type="password" name="password" placeholder="Enter password" onChange={handleChange} /> 

        <button type="submit">Submit</button> 
    </form>
  )
}

export default LoginForm
