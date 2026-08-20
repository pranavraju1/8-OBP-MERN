import { useReducer, useState } from "react";

const intialState = {
    isVisible: true
}

const reducer = (state, action) => {
    switch(action.type){
        case "toggle":
            return {...state, isVisible: !state.isVisible}
        default:
            return state
    }
} 

export default function ToggleMessage() {
//   const [toggle, setToggle] = useState(false);

const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <div>
      <button onClick={()=>dispatch({type:"toggle"})}>
        Toggle Message
      </button>
      {state.isVisible && <p>Hello students, welcome to React!</p>}
    </div>
  );
}
