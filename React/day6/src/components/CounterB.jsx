
const CounterB = ({count, setCount}) => {
  return (
    <div>
      <h1>CounterB: {count}</h1>
        <button onClick={()=>setCount((prev) => prev + 1)}>Increase</button>      
        <button onClick={()=>setCount((prev) => prev - 1)}>Decrease</button>      
    </div>
  )
}

export default CounterB
