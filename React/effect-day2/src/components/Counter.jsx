import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0)

    // Note: Do not forget to specify the dependency array in useEffect, bc that is what determines 
    // how the sideEffects are performed
    // useEffect(()=>{
    //     console.log("hello")
    // }, [count, count2])

    // componentDidMount -> 
    // useEffect(()=>{
    //     console.log("performing this sideEffect when component is mounted on the screen")
    // },[])


    // componentDidUpdate
    // useEffect(()=>{
    //     console.log("performing this sideEffect when component updates on the screen")
    // },[count])

    // componentWillUnmount
    useEffect(()=>{

        return ()=>{
            console.log("performing this sideEffect when component is removed from the screen")
        }
        
    },[])


    return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(prev => prev + 1)}>Increase</button>
      <h1>Count2: {count2}</h1>
      <button onClick={()=>setCount2(prev => prev + 1)}>Increase</button>
    </div>
  )
}

export default Counter
