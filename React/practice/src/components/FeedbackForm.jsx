import { useState } from "react";

const FeedbackForm = () => {
    const [student, setStudent] = useState({course:"", feedback: ""})

    const handleCourse = (e) => {
        // console.log(e.target.value)
        setStudent((prev) => ({...prev, course: e.target.value}))
    }
    const handleFeedback = (e) => {
        setStudent((prev) => ({...prev, feedback: e.target.value}))
    }

    function handleSubmit(e) { 
        e.preventDefault();
        console.log(student)
    }

  return (
    <form onSubmit={handleSubmit}>
        <select onChange={handleCourse}> 
            <option>Select Course</option> 
            <option value="react">React</option> 
            <option value="js">JavaScript</option> 
            <option value="css">CSS</option> 
        </select>
        <textarea placeholder="Write your feedback" onChange={handleFeedback}/>
        <button  type="submit">Send</button>
    </form>
  )
}

export default FeedbackForm
