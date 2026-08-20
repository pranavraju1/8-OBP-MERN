import { useReducer, useState } from "react";

const initialState = {
  name: "",
  email: "",
  course: "React",
  isSubmitted: false,
};


const reducer = (state, action) => {
    switch(action.type){
        case "updateState":
            return {...state, [action.field]: action.value}
        
        case "submit":
            return {...state, isSubmitted: true}
        case "reset":
            return initialState
        default:
            return state
    }   
}



export default function RegistrationForm() {
const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
        type: "updateState",
        field: e.target.name,
        value: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: "submit",
    })
  };

  const handleReset = () => {
    dispatch({
        type: "reset",
    })

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <select name="course" value={state.course} onChange={handleChange}>
        <option>React</option>
        <option>JavaScript</option>
        <option>Node</option>
      </select>
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      {state.isSubmitted && <p>Form submitted successfully!</p>}
    </form>
  );
}
