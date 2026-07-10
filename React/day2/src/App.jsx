import Card from "./components/Card"
import Greeting from "./components/Greeting"
import Grreetings2 from "./components/Grreetings2"
import Hello from "./components/Hello"
import Prodeucts from "./components/Prodeucts"
import Students from "./components/Students"



const App = () => {
  const name = "pranav"
  return (
    <div>
      <Hello />
      <Greeting name={name} />
      <Grreetings2 
        name={name} 
        age={20} 
      />

      <Card title={"Demo Card"}>      
        <p>Javascript Fundamentals</p>
        <p>Duration 4 weeks</p>
      </Card>

      <Students/>

      <Prodeucts/>

    </div>
  )
}

export default App
