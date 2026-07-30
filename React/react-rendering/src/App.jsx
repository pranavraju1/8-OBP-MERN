import { useState } from "react"

const App = () => {

  const [fruits, setFruits] = useState(["apple", "banana", "watermelon"])

  return (
    <ul>
      {fruits.map((item, index) => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default App
