// The useEffect Hook allows you to perform side effects in your components. 
// datafetching
// calculation
// clean up

import { useEffect, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  
  // console.log("component rendering count: ", count)
  
  useEffect(()=>{
    console.log("effect running count: ", count)
  }, [count])

  return (
    <div>
      <button onClick={()=>setCount(prev => prev + 1)}>Count: {count}</button>
      <button onClick={()=>setCount1(prev => prev + 1)}>Count1: {count1}</button>
    </div>
  )
}

export default App
