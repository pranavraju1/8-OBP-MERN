import { useState } from "react"
import Counter from "./components/Counter"
import Test from "./components/Test"
import Timer from "./components/Timer"
import Logs from "./components/Logs"


const App = () => {
  const [toggle, setToggle] = useState(true)
  const [name, setName] = useState("")
  return (
    <div>
      {/* {toggle && <Counter/> } */}
      {/* <Test/> */}
      {/* {toggle && <Timer/> } */}

      
      {/* <button onClick={()=>setToggle(prev => !prev)}>Toggle Component</button> */}
      {/* <input type="text" onChange={(e)=>setName(e.target.value)} /> */}

      <Logs/>
    </div>
  )
}

export default App
