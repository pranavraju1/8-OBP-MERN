import { useState } from "react";

const RegistrationForm = () => {
    const [student, setStudent] = useState({ fullName: '', email: '', course: '', message: '' });

    function handleSubmit(e) {}

    return (
        <div>
            <form>
                <input name="fullName" placeholder="Full name" /> 
                <input name="email" placeholder="Email" /> 
                <input name="course" placeholder="Course" />
                <textarea name="message" placeholder="Message" /> 
                <button type="submit">Register</button>
            </form>
            {
                    <div>
                        <h3>Submitted Data</h3> 
                        <p>Name: {student.fullName}</p> 
                        <p>Email: {student.email}</p> 
                        <p>Course: {student.course}</p> 
                        <p>Message: {student.message}</p>
                    </div>
                
            }
        </div>
  )
}

export default RegistrationForm
