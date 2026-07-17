import { useState } from "react"

const StepCounter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrease = () => {
        setCount((prev) => prev + step)
    }
    const handleDecrease = () => {
        setCount((prev) => prev - step)
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <input 
        type="text" 
        placeholder="enter number of steps" 
        onChange={(e) => setStep(Number(e.target.value))}  
     />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default StepCounter
