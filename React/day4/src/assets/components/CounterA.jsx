import { useState } from "react"

const CounterA = ({isPremium = true}) => {

    // if(isPremium){
        let [count, setCount] = useState(0);
    // }


    console.log("Counter A is rendering")


    return (
    <div>
      <h2>Counter A: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default CounterA
