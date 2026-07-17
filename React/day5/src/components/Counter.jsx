import { useState } from "react"

const Counter = () => {
    
    const [count, setCount] = useState(0);

    console.log("Render phase: complete render with count value: ", count);

    const handleClick = () =>{
        console.log("Before setCount count value: ", count);
    
        setCount(count + 1);

        console.log("After setCount count value: ", count);
    
    }
    

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default Counter

// output
// click 1->
// "Before setCount count value: " -> 0
// "After setCount count value: "-> 0
// "Render phase: complete render with count value: " -> 1

// click 2->
// "Before setCount count value: " -> 1
// "After setCount count value: " -> 1
// "Render phase: complete render with count value: " -> 2

// In react, state updates or not immediate
// when you call a setState, you are scheduling an update for the next render
// Inside your current render, the state values don't change
// if you log the value inside the eventhandler you will always get the same value