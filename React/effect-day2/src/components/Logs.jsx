import { useEffect, useState } from "react"

const Logs = () => {
    const [count, setCount] = useState(0);

    console.log("Rendering, count: ", count) // 1
    
    useEffect(()=>{
        
        console.log("Effect Rendering, count: ", count) //3
        
        return () => {
            console.log("Cleanup rendering count Rendering, count: ", count)
        }

    },[count])

    console.log("Rendering complete count: ", count)   //2
    
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Logs

// Inital render 
// Rendering, count:  0
// Rendering complete count:  0
// Effect Rendering, count:  0

// When the state updated
// Rendering, count:  1
// Rendering complete count:  1
// Cleanup rendering count Rendering, count:  0
// Effect Rendering, count:  1