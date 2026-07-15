import { useState } from "react";

const CounterB = () => {
    
    // lazy initalization
    // the below function will run as soon as the component renders (and only then)
    // this is useful when you have to do any heavy computation to calculate the inital state 
    // like rendering from local staorage of fetching data
    const [count, setCount] = useState(()=>{
        console.log("runs in inital render")
        return 0;
    });
     
    
    console.log("Counter B is rendering")
  
  
      return (
      <div>
        <h2>Counter B: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
      )
}

export default CounterB
