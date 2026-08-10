import express from "express";
const app = express();
const PORT = 3000;

// this how we create a global middleware
app.use(express.json());

// this is how you start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

const movies = [
  {id:1, title: 'Inception', genre: 'Sci-Fi', watched: true},
  {id:2, title: 'Interstellar', genre: 'Sci-Fi', watched: true},
  {id:3, title: 'ZNMD', genre: 'drama', watched: true},
  {id:4, title: 'Koi Mil Gaya', genre: 'Sci-Fi', watched: true},
]



// get movie details from postman and insert it inside movies array
// in response send the whole movies array to check
app.post("/movies", (req, res)=>{

  const {title, genre, watched} = req.body;
  
  let obj = { id: movies.length+1, title, genre, watched }

  movies.push(obj)

  res.json(movies)
})

app.get("/movies",(req, res)=>{
  res.json(movies)
})

// Note: if the routes are same remeber to keep the methods different, if both are same then the 
// 1st route which is created only hits


app.patch("/movies/:id", (req, res)=>{
  const {id} = req.params; 
  console.log(id);
  const {watched, title, genre} = req.body;
  const searchMovie =  movies.find(item => item.id == id);
  if(!searchMovie){
    res.status(404).send("movie does not exist")
  }

  if(watched !== undefined){
    searchMovie.watched = watched
  }
  if(title !== undefined){
    searchMovie.title = title
  }
  if(genre !== undefined){
    searchMovie.genre = genre
  }
  
  const index = movies.findIndex(m => m.id === id)
  
  movies[index] = searchMovie

  res.json(movies)
})

app.put("/movies/:id", (req, res)=>{
  const {id} = req.params; 
    
  const {watched, title, genre} = req.body;

  const searchMovie =  movies.find(item => item.id == id);
  
  const index = movies.findIndex(m => m.id == id)
  
  if(!searchMovie){
    res.status(404).send("movie does not exist")
  }
  const updatedMovie = {
    id: Number(id) , title, genre,watched
  }
  movies[index] = updatedMovie
  res.json(movies)
})


app.delete("/movies/:id", (req, res)=>{

})


const todos = [
  {id: 100, task: "todo1", completed: false},
  {id: 101, task: "todo2", completed: false},
  {id: 102, task: "todo3", completed: false},
  {id: 103, task: "todo4", completed: false},
]

// implement the below routes

// get all todos
app.get("/todo", (req,res)=>{
  res.status(200).json({data: todos, message: "todos got successfully"})
})

// create a todo
app.post("/todo", (req, res)=>{
  const {task, completed} = req.body;
  if(task!== undefined && completed !== undefined){
    const obj = {id: todos[todos.length-1].id + 1, task ,completed};
    todos.push(obj);

    res.status(200).json({data: todos, message: "todo inserted successfully"})
    
  }else{
    res.status(404).json({message:"missing credentials"});
  }
})

// toggle completed
app.patch("/todo/toggle-completed/:id")

// edit todo
app.put("/todo/:id")

// delete todo
app.delete("/todo/:id")
