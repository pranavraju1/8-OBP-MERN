// import { useState } from "react"

// const CounterB = () => {
//     const [count, setCount] = useState(0);

//     console.log("Render phase: complete render with count value: ", count);

//     const handleClick = () =>{
    
//         setCount(count + 1);
//         console.log("After setCount(count + 1): ", count);

//         setCount(count + 5);
//         console.log("After setCount(count + 5): ", count);
        
//         setCount(count + 10);
//         console.log("After setCount(count + 10): ", count);
    
//     }
//   return (
//     <div>
//         <h1>CounterB: {count}</h1>
//         <button onClick={handleClick}>Increase</button>
//     </div>
//   )
// }

// export default CounterB
// After setCount(count + 1):  0
// After setCount(count + 5):  0
// After setCount(count + 10):  0
// Render phase: complete render with count value:  10

// as we can see react does not allow us to directly update the state multiple times in the same handler
// this is done so that the amount of component rerenders could br limited for better optimization

// but what happens when we want to update the state multiple times -> to solve this the setState function 
// has an argument that keep tracks of the previous value

// import { useState } from "react"

// const CounterB = () => {
//     const [count, setCount] = useState(0);

//     console.log("Render phase: complete render with count value: ", count);

//     const handleClick = () =>{
    
//         // setCount(count + 1);
//         setCount((prev) => prev + 1);
//         console.log("After setCount((prev) => prev + 1): ", count);

//         setCount((prev) => prev + 5);
//         console.log("After setCount((prev) => prev + 5): ", count);
        
//         setCount((prev) => prev + 10);
//         console.log("After setCount((prev) => prev + 10): ", count);
    
//     }
//   return (
//     <div>
//         <h1>CounterB: {count}</h1>
//         <button onClick={handleClick}>Increase</button>
//     </div>
//   )
// }

// export default CounterB

// Note: if the next value of state depends on the previous value always go with prev arg in setState
// this will help you avoid unnecessary rerenders and keep the sate in code and UI in sync 





import { useState } from "react"

const CounterB = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(0);
    const [isActive, setIsActive] = useState(0);

    console.log("Render phase: complete render");

    const handleClick = () =>{
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 5);
        setCount((prev) => prev + 10);
        setName("updated value")
        setIsActive(true)
    }
  return (
    <div>
        <h1>CounterB: {count}</h1>
        <h2>Name: {name}</h2>
        <h2>Active: {isActive ? "Yes" : "No"}</h2>
        <button onClick={handleClick}>Update all values</button>
    </div>
  )
}

export default CounterB

// in the above code we can see that even tho the state is updated 5 times but component only renders 1 time
// This is known as Batching, in batching react ->
// 1. waits until your event handlers finishes
// 2. gathers all your state updates
// 3. applies them in one render
