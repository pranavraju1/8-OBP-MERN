// useReducer
// its a react hook used to manage state that chnages in a structured way
// its useful when state updates depends on a previous state or when multiple actions update the same state
// it seprates "what happens" from "how the state updates"
// it makes logic easier to organize in large componets

import { useReducer } from "react"

const intialState = {
    count: 0,
    steps:1
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            // return state + 1
            return {...state, count: state.count + state.steps}
        case "decrement":
            return {...state, count: state.count - state.steps}
        case "reset":
            return {...state, count: 0, steps: 0}
        case "increaseStep":
            return {...state, steps: state.steps + 1}
        case "changeStep":
            return {...state, steps:  action.paylaoad}
        default:
            return state
    }
}


export default function SimpleCounter() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, intialState);
    console.log(state)
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <h2>Steps: {state.steps}</h2>
      
      {/* <button onClick={() => dispatch({type:'increaseStep'})}>Increse steps</button> */}

    <input 
    type="number" 
    placeholder="enter number of steps" 
    onChange={(e)=> dispatch({type:'changeStep', paylaoad: Number(e.target.value)})} />


      <button onClick={() => dispatch({type:'increment'})} >+</button>
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  );
}
