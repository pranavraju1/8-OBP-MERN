import { useEffect, useState } from "react"
import axios from "axios";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [task , setTask] = useState("");

  useEffect(()=>{
    async function fetchData() {
      const res = await axios.get("http://localhost:3000/todo");
      console.log(res.data.data)
      setTodos(res.data.data);
    }
    fetchData()
  },[])

  const addTodo = (e) => {
    e.preventDefault();
    
    if(task.trim() === ""){
      return
    }

    axios.post("http://localhost:3000/todo", {
      task: task,
      completed: false
    }).then((res)=> {
      setTodos([...todos, res.data.data]);
      setTask("");
    })

  }


  const editTodo = (todo) => {
    const newTask = prompt("Enter new task", todo.task);
    if(newTask === ""){
      return
    }
    // axios.put(`http://localhost:3000/todo/${todo.id}`, {
    //   task: newTask
    // }).then((res)=>console.log(res))
    
    axios.put(`http://localhost:3000/todo/${todo.id}`, {
      task: newTask
    }).then((res)=>{
      const updatedTodo = res.data.data;
      setTodos(todos.map((currentTodo) => {
        if(currentTodo.id == todo.id){
          return updatedTodo
        }else{
          return currentTodo
        }
      }))
    })



  }


  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={addTodo} >
        <input type="text" placeholder="Enter Todo" value={task}  onChange={(e)=>setTask(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>


      {todos.map((todo)=>(
        <div key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span style={
              {
                textDecoration: todo.completed ? "line-through": "none",
                marginRight: "20px"  
              }
            } >{todo.task}</span>
            <button onClick={()=>editTodo(todo)}>Edit</button>
            <button>Delete</button>
        </div>
      ))}

    </div>


  )
}

export default App
